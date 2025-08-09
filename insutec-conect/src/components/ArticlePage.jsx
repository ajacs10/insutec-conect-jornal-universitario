// src/components/ArticlePage.jsx
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import journalContent from '../data/journalContent';
import './ArticlePage.css';

function ArticlePage() {
  const { id } = useParams();
  
  const newsSection = journalContent.sections.find(section => section.type === 'news');
  const article = newsSection.content.find(item => item.id.toString() === id);

  // Estados para gravação de áudio
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  // Estados para o formulário de comentários
  const [newComment, setNewComment] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false); // NOVO: Estado para anonimato

  // Lista de emojis para as reações
  const reactionEmojis = ['👍', '😂', '❤️', '🔨', '👀'];

  const getInitialReactions = () => {
    const initialReactions = {};
    reactionEmojis.forEach(emoji => {
      initialReactions[emoji] = 0;
    });
    return initialReactions;
  };

  const [comments, setComments] = useState([
    { 
      id: 1, 
      author: 'Ana Silva', 
      text: 'Excelente artigo! O aumento da propina é uma grande preocupação para todos nós.',
      reactions: { '👍': 3, '❤️': 1, '😂': 0, '🔨': 0, '👀': 0 }
    },
    { 
      id: 2, 
      author: 'Pedro Costa', 
      text: 'Precisamos de mais transparência da direção do INSUTEC sobre estes investimentos.',
      reactions: { '👍': 5, '😂': 0, '❤️': 0, '🔨': 0, '👀': 0 }
    }
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() || audioBlob) {
      // NOVO: Define o autor com base no estado do anonimato
      const author = isAnonymous ? 'Anónimo' : 'Visitante';
      const newId = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
      
      const newCommentData = {
        id: newId, 
        author, 
        text: newComment,
        audio: audioBlob ? URL.createObjectURL(audioBlob) : null,
        reactions: getInitialReactions()
      };
      
      setComments([...comments, newCommentData]);
      setNewComment('');
      setAudioBlob(null);
      setIsAnonymous(false); // Reseta o estado depois de enviar
    }
  };

  const handleReaction = (commentId, emoji) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              reactions: {
                ...comment.reactions,
                [emoji]: (comment.reactions[emoji] || 0) + 1,
              },
            }
          : comment
      )
    );
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      audioChunks.current = [];
      
      mediaRecorder.current.ondataavailable = event => {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(audioChunks.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.current.start();
      setIsRecording(true);
      setAudioBlob(null);
    } catch (err) {
      console.error("Erro ao aceder ao microfone: ", err);
      alert("Não foi possível aceder ao microfone. Verifique as permissões.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  if (!article) {
    return (
      <main className="article-page-container">
        <h2>Artigo não encontrado.</h2>
      </main>
    );
  }

  if (article.dislikes >= 20) {
    return (
      <main className="article-page-container">
        <h2>Este artigo foi ocultado devido a um grande número de descurtidas.</h2>
      </main>
    );
  }

  return (
    <main className="article-page-container">
      <h1 className="article-title">{article.title}</h1>
      <p className="article-details">Por: {article.author} | {article.time}</p>
      <div className="article-content">
        <p>{article.fullText || article.description}</p>
      </div>

      <section className="comments-section">
        <h3>Comentários</h3>
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="comment">
                <p className="comment-author"><strong>{comment.author}</strong></p>
                {comment.text && <p className="comment-text">{comment.text}</p>}
                {comment.audio && <audio src={comment.audio} controls className="audio-comment" />}
                
                <div className="comment-reactions">
                  {Object.entries(comment.reactions).map(([emoji, count]) => (
                    <button
                      key={emoji}
                      onClick={() => handleReaction(comment.id, emoji)}
                      className="reaction-button"
                    >
                      {emoji} {count > 0 && count}
                    </button>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>Seja o primeiro a comentar!</p>
          )}
        </div>

        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <div className="comment-input-area">
            {isRecording ? (
              <p className="recording-status">A gravar... Clique em 'Parar' para terminar.</p>
            ) : (
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Escreva o seu comentário..."
                disabled={isRecording || audioBlob}
                required={!audioBlob}
              />
            )}
            
            {audioBlob && (
              <div className="audio-preview">
                <p>Pré-visualização do áudio:</p>
                <audio src={URL.createObjectURL(audioBlob)} controls />
                <button type="button" onClick={() => setAudioBlob(null)} className="remove-audio-button">Remover Áudio</button>
              </div>
            )}
          </div>
          
          <div className="comment-options"> {/* NOVO: Container para opções */}
            <label className="checkbox-container">
              Comentar como Anónimo
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="comment-actions-row">
            <div className="record-buttons">
              {!isRecording ? (
                <button 
                  type="button" 
                  onClick={startRecording} 
                  className="record-button"
                  disabled={!!newComment}
                >
                  Gravar Áudio
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={stopRecording} 
                  className="stop-button"
                >
                  Parar Gravação
                </button>
              )}
            </div>
            <button type="submit" className="submit-button" disabled={isRecording}>
              Comentar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ArticlePage;