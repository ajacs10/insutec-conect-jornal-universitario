// src/components/NewsPage.jsx
import React from 'react';
import Section from './Section';
import journalContent from '../data/journalContent';
import './NewsPage.css';

// Componente simples de placeholder para o gráfico
const GraphPlaceholder = ({ data }) => {
  return (
    <div className="graph-container">
      <h3>Gráfico de Exemplo: Inscrições em Eventos</h3>
      <p>Este é um placeholder para um gráfico. Para adicionar um gráfico real, pode usar uma biblioteca como a 'react-chartjs-2'.</p>
    </div>
  );
};

function NewsPage() {
  const newsSection = journalContent.sections.find(s => s.type === 'news');

  return (
    <main className="news-page-container">
      {newsSection ? (
        <>
          {/* Texto grande de descrição da página */}
          <section className="news-intro-section">
            <h1 className="news-page-title">Notícias</h1>
            <p className="news-intro-text">{newsSection.description}</p>
          </section>

          {/* Área do Gráfico */}
          <section className="news-graph-section">
            <GraphPlaceholder data={newsSection.graphData} />
          </section>

          {/* Seção com os cards de notícias */}
          <Section section={newsSection} />
        </>
      ) : (
        <h2>Nenhuma notícia encontrada.</h2>
      )}
    </main>
  );
}

export default NewsPage;