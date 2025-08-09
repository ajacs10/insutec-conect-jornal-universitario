import React from 'react';

// Dados de mídia de exemplo
const mediaItems = [
  {
    id: 'm1',
    type: 'video',
    title: 'Semana de Inovação INSUTEC - Melhores Momentos',
    description: 'Um resumo dos principais momentos e palestras da nossa Semana de Inovação e Tecnologia.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', // Thumbnail de exemplo
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef', // URL de embed do YouTube
  },
  {
    id: 'm2',
    type: 'image',
    title: 'Galeria de Fotos: Dia do Campus 2025',
    description: 'Veja as fotos do nosso recente Dia do Campus, com atividades e integração.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Campus+INSUTEC',
  },
  {
    id: 'm3',
    type: 'video',
    title: 'Entrevista: Carreira em TI com Ex-Aluno',
    description: 'Nosso ex-aluno compartilha suas experiências e dicas para uma carreira de sucesso em TI.',
    thumbnail: 'https://img.youtube.com/vi/QH2-TGUlwu4/mqdefault.jpg', // Outro thumbnail de exemplo
    videoUrl: 'https://www.youtube.com/embed/QH2-TGUlwu4?si=abcdef',
  },
  // Adicione mais itens de mídia aqui
];

const MediaPage = () => {
  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Mídia INSUTEC</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map(item => (
          <div key={item.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {item.type === 'video' ? (
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded"
                ></iframe>
              </div>
            ) : (
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded" />
            )}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-teal-300">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MediaPage;