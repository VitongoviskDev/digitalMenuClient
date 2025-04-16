import React, { useEffect, useState } from 'react';
import styles from './TodayMenuPage.module.css';
import { MenuDTO } from '../../dtos/MenuDTO';
import api from '../../../axiosConfig';

const TodasyRestaurantMenuPage = () => {
  const [menu, setMenu] = useState<MenuDTO>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get("/menus/1");
        console.log(response.data);
        setMenu(response.data);
      } catch (ex: any) {
        setError(ex.message || 'Erro ao buscar o menu');
      }
    };

    fetchMenu();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!menu) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.today_page_container}>
      <div className={styles.header}>
        <div className={styles.image_container}>
          <img src={menu.imageUri} alt={menu.name} className={styles.image} />
        </div>
      </div>
      <div className={styles.menu_title_container}>
        <h1 className={styles.menu_title}>{menu.name}</h1>
        <h1 className={styles.menu_description}>{menu.description}</h1>
      </div>
      <div className={styles.menu_items_container}>
        {menu.menuSections.map((section, idx) => (
          <div key={idx} className={styles.section_container}>
            <h2 className={styles.section_title}>{section.name}</h2>
            <div className={styles.section_items_container}>
              <ul className={styles.section_items_list}>
                {section.products.map((item, itemIdx) => (
                  <li key={itemIdx} className={styles.section_list_item}>
                    <p>{item.name}</p>
                    <div className={styles.doted_line}></div>
                    <p className={styles.price}>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodasyRestaurantMenuPage;
