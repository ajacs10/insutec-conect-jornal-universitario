import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';
import MediaPage from './components/MediaPage';
import PodcastPage from './components/PodcastPage';
import JournalPage from './components/JournalPage';
import ChatWidget from './components/ChatWidget';
import insutecLogo from './assets/imagem/insutec.png';
import './index.css';

function App() {
  return (
    // Fundo branco e texto escuro para o resto da página
    <div className="app-container min-h-screen bg-white text-gray-900">
      
      {/* Barra de navegação com fundo azul escuro e texto branco */}
      <header className="main-header bg-blue-900 p-4 flex flex-col md:flex-row justify-between items-center text-white shadow-md space-y-4 md:space-y-0">
        
        {/* Logo e Nome do Jornal */}
        <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
          <img src={insutecLogo} alt="Logo INSUTEC" className="h-12 w-12 object-contain" />
          <h1 className="text-2xl md:text-3xl font-bold">INSUTEC-CONECT</h1>
        </Link>
        
        {/* Navegação Principal */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-6">
            <li><Link to="/" className="hover:text-blue-200 font-medium px-3 py-2 rounded transition-all hover:bg-blue-800">Notícias</Link></li>
            <li><Link to="/media" className="hover:text-blue-200 font-medium px-3 py-2 rounded transition-all hover:bg-blue-800">Mídia</Link></li>
            <li><Link to="/podcast" className="hover:text-blue-200 font-medium px-3 py-2 rounded transition-all hover:bg-blue-800">Podcast</Link></li>
            <li><Link to="/journal" className="hover:text-blue-200 font-medium px-3 py-2 rounded transition-all hover:bg-blue-800">Jornal</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200 font-medium px-3 py-2 rounded transition-all hover:bg-blue-800">Contato</Link></li>
          </ul>
        </nav>
      </header>

      {/* Definição das Rotas do Aplicativo */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/contact" element={<p className="p-6 text-center text-gray-700">Página de Contato em construção!</p>} />
      </Routes>

      {/* Rodapé do Jornal */}
      <footer className="main-footer bg-blue-900 p-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} INSUTEC-CONECT. Todos os direitos reservados.</p>
        <p>Desenvolvido por Ana Sobrinho com para a comunidade INSUTEC.</p>
      </footer>
    </div>
  );
}

export default App;