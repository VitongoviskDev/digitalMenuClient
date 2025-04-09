import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../axiosConfig';
import { MenuDTO } from '../../dtos/MenuDTO';

const MenuDetailsPage = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState<MenuDTO>();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get(`/menus/${id}`);
        setMenu(response.data);

      } catch (error) {
        console.error('Erro ao buscar menu:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      MenuDetailsPage {id}
      {
        menu ?
          <>
            <p>{menu.name}</p>
            <p>{menu.description}</p>
            <p>{menu.imageUri}</p>
            <p>{menu.products.map((p, index) => (
              <li key={index}>{p?.name}</li>
            ))}</p>
          </> :
          <>NOT FOUND</>
      }
    </div>
  )
}

export default MenuDetailsPage