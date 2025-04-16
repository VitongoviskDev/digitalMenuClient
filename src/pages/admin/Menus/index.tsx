import React, { useEffect, useState } from 'react'

import { MenuMinDTO } from '../../../dtos/MenuMinDTO';

import api from '../../../../axiosConfig';
import Menu from '../../../components/Menu';

import styles from './MenusPage.module.css';

import { IoAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const MenusPage = () => {

    const [menus, setMenus] = useState<MenuMinDTO[]>([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await api.get('/menus');
                console.log(response.data.content)
                setMenus(response.data.content);

            } catch (error) {
                console.error('Erro ao buscar menu:', error);
            }
        };

        fetchMenu();
    }, []);

    return (
        <div className={styles.menu_page}>
            <header className={styles.header}>
                <h1 className={styles.title}>Cardápios <span>({menus.length})</span></h1>
                <Link className={styles.add_button} to="/"><IoAddSharp/> NOVO</Link>
            </header>
            <div className={styles.menus_container}>
                {menus.map((item, index) => (
                    <Menu key={index} menu={item} />
                ))}
            </div>
        </div>
    )
}

export default MenusPage