import React, { useEffect, useState } from 'react'

import styles from './MenusPage.module.css';
import { MenuMinDTO } from '../../dtos/MenuMinDTO';
import api from '../../../axiosConfig';
import Menu from '../../components/Menu';

const MenusPage = () => {

    const [menu, setMenu] = useState<MenuMinDTO[]>([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await api.get('/menus');
                console.log(response.data.content.length)
                setMenu(response.data.content);

            } catch (error) {
                console.error('Erro ao buscar menu:', error);
            }
        };

        fetchMenu();
    }, []);

    return (
        <div className={styles.menu_page}>
            <h1 className={styles.title}>Cardápios</h1>
            <div className={styles.menus_container}>
                {menu.map((item, index) => (
                    <Menu key={index} id={item.id} name={item.name} description={item.description} imageUri={item.imageUri} />
                ))}
            </div>
        </div>
    )
}

export default MenusPage