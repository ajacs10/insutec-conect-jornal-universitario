import React from 'react';

const PodcastPage = () => (
  <main className="p-6">
    <h2 className="text-2xl font-bold text-teal-400 mb-4">Podcast Estudantil</h2>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-teal-300">Episódio 1</h3>
      <audio controls className="w-full mt-2">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  </main>
);

export default PodcastPage;