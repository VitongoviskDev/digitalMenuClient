import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../axiosConfig';
import { MenuDTO } from '../../dtos/MenuDTO';

import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

import styles from './MenuDetailsPage.module.css';

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
      {
        menu ?
          <div className={styles.page_container}>
            <div className={styles.header}>
              <img className={styles.menu_image} src={menu.imageUri} alt="" />
            </div>
            <div className={styles.menu_data_container}>
              <h2 className={styles.title}>{menu.name}</h2>
              <p className={styles.description}>{menu.description}</p>
              <h3 className={styles.items_label}>Itens <span>(26)</span></h3>
              <div className={styles.items_container}>
                <ul className={styles.items_list}>
                  {
                    menu.products.map((item, index) => (
                      <li key={index} className={styles.item_card}>
                        <img className={styles.item_image} src={menu.imageUri} alt={`imagem: ${item.name}`} />
                        <div className={styles.item_data_container}>
                          <p className={styles.item_name}>{item.name}</p>
                          <p className={styles.item_description}>{item.description}</p>
                          <div className={styles.item_data_bottom}>
                            <p className={styles.item_price}>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            <div className={styles.item_buttons}>
                              <button className={styles.item_button}><AiOutlineEdit/></button>
                              <button className={styles.item_button}><AiOutlineDelete/></button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div> :
          <>

          </>
      }
    </div>
  )
}

export default MenuDetailsPage