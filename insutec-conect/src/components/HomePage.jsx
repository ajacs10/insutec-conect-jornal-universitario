import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';

function HomePage() {
  const getPlainText = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <main className="main-content font-mulish">
      <section className="hero-section mb-8">
        <div className="hero-card text-center p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold font-mulish text-teal-400 mb-4">Bem-vindo ao INSUTEC-CONECT</h1>
          <p className="text-lg text-gray-300 mb-6">Explore as últimas notícias, mídias e conteúdos da comunidade INSUTEC.</p>
          <Link to="/journal" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors">Veja o Jornal</Link>
        </div>
      </section>
      <h2 className="text-2xl font-bold font-mulish text-teal-400 mb-4">Últimas Notícias</h2>
      <div className="articles-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.imageUrl} alt={article.title} className="article-image" />
            <div className="article-info">
              <h3 className="font-mulish">{article.title}</h3>
              <p className="article-meta">Por {article.author} ({article.authorAffiliation}) - {article.date}</p>
              <p>{getPlainText(article.content).substring(0, 150)}...</p>
              <Link to={`/article/${article.id}`}>
                <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors mt-2">Ler Mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;