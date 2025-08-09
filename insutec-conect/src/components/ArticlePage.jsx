import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articles';
import ChatWidget from './ChatWidget';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <main className="p-6 font-mulish"><h2 className="text-2xl text-red-400">Artigo não encontrado!</h2></main>;
  }

  const handleListen = () => {
    const utterance = new SpeechSynthesisUtterance(article.content);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <main className="p-6 font-mulish">
      <div className="article-full bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold font-mulish text-teal-400 mb-4">{article.title}</h1>
        <p className="text-gray-400 mb-4">Por {article.author} ({article.authorAffiliation}) - {article.date}</p>
        <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded mb-4" />
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        <button onClick={handleListen} className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Ouvir Artigo</button>
      </div>
      <ChatWidget />
    </main>
  );
};

export default ArticlePage;