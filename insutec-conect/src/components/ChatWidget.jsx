import React from 'react';

const ChatWidget = () => (
  <div className="fixed bottom-4 right-4 w-80 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
    <h3 className="text-lg font-bold">Chat com INSUTEC</h3>
    <p className="text-sm">Pergunte qualquer coisa sobre INSUTEC!</p>
    <input type="text" className="w-full mt-2 p-2 bg-gray-700 text-white rounded" placeholder="Digite aqui..." />
    <button className="mt-2 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Enviar</button>
  </div>
);

export default ChatWidget;