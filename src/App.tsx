import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';
import { MenuMinDTO } from './dtos/MenuMinDTO';

const App = () => {
  const [menu, setMenu] = useState<MenuMinDTO[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get('/menus');
        
        setMenu(response.data.content);
  
      } catch (error) {
        console.error('Erro ao buscar menu:', error);
      }
    };
  
    fetchMenu();
  }, []);
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menus</h1>
      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.id} className="border rounded p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
