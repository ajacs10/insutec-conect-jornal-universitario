// src/components/HomePage.jsx
import React from 'react';
import Section from './Section';
import SportsHighlights from './SportsHighlights';
import journalContent from '../data/journalContent';
import './HomePage.css';

function HomePage() {
  const highlightsData = journalContent.highlights;

  return (
    <main className="homepage-main">
      {highlightsData && <SportsHighlights title={highlightsData.title} text={highlightsData.text} />}
      {journalContent.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </main>
  );
}

export default HomePage;