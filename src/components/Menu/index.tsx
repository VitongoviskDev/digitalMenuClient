import React from 'react'
import { MenuMinDTO } from '../../dtos/MenuMinDTO'

import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

interface MenuProps {
    menu: MenuMinDTO;
}

const Menu = (props: MenuProps) => {
    return (
        <div className={styles.menu_container}>
            <div className={styles.image_container}>
                <img src={props.menu.imageUri} alt={`capa do menu ${props.menu.name}`} />
            </div>
            <div className={styles.content_container}>
                <div className={styles.text_container}>
                    <h1 className={styles.title}>
                        {props.menu.name}
                    </h1>
                    <p className={styles.description}>
                        {props.menu.description}
                    </p>
                </div>
                <div className={styles.info_container}>
                    <div className={styles.info_item}>
                        <p>Itens</p>
                        <span>{props.menu.productCount} itens</span>
                    </div>
                    <div className={styles.info_item}>
                        <p>Status</p>
                        <span>Disponível</span>
                    </div>
                </div>
                <div className={styles.display_dates}>
                    <h2 className={styles.display_dates_title}>Exibição:</h2>
                    <p className={styles.display_dates_item}>
                    {
                        props.menu.workingDays
                            .map(x => x.slice(0,3))
                            .join(" - ")
                    }
                    </p>
                </div>
                <Link className={styles.button} to={`/admin/menus/${props.menu.id}`}>Detalhes</Link>
            </div>
        </div>
    )
}

export default Menu