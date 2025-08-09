import React, { useState } from 'react';
import articles from '../data/articles';
import { Link } from 'react-router-dom';

function JournalPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [authorAffiliation, setAuthorAffiliation] = useState('');
  const [date] = useState(new Date().toLocaleDateString('pt-BR'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now().toString(),
      title,
      content,
      author,
      authorAffiliation,
      date,
      imageUrl: 'https://via.placeholder.com/300x200',
    };
    console.log('New Article Submitted:', newArticle);
    setTitle('');
    setContent('');
    setAuthor('');
    setAuthorAffiliation('');
    alert('Artigo enviado com sucesso! (Ver console para detalhes)');
  };

  const getPlainText = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <main className="p-6 font-mulish journal-theme">
      <h2 className="text-3xl font-bold font-mulish text-teal-400 mb-6 text-center neon-text">Jornal INSUTEC-CONECT</h2>

      {/* Published Articles Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">Artigos Publicados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <div key={article.id} className="article-card bg-gray-800 p-4 rounded-lg shadow-md border border-teal-500">
              <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover rounded-md mb-2" />
              <h4 className="text-xl font-mulish text-teal-300">{article.title}</h4>
              <p className="text-gray-400 text-sm">Por {article.author} ({article.authorAffiliation}) - {article.date}</p>
              <p className="text-gray-300 mt-2">{getPlainText(article.content).substring(0, 100)}...</p>
              <Link to={`/article/${article.id}`} className="text-teal-400 hover:text-teal-300 mt-2 inline-block">Ler Mais</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Article Submission Form */}
      <section className="bg-gray-800 p-6 rounded-lg shadow-md border border-teal-500">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">Submeter Artigo</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-teal-300 mb-1">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-md border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div>
            <label className="block text-teal-300 mb-1">Conteúdo</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-md border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-teal-300 mb-1">Autor</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-md border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div>
            <label className="block text-teal-300 mb-1">Afiliação</label>
            <input
              type="text"
              value={authorAffiliation}
              onChange={(e) => setAuthorAffiliation(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-md border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition-colors"
          >
            Enviar Artigo
          </button>
        </form>
      </section>
    </main>
  );
}

export default JournalPage;