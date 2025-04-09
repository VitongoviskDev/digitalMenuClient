import React from 'react'
import { MenuMinDTO } from '../../dtos/MenuMinDTO'

import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = (props: MenuMinDTO) => {
    return (
        <div className={styles.menu_container}>
            <div className={styles.image_container}>
                <img src={props.imageUri} alt={`capa do menu ${props.name}`} />
            </div>
            <div className={styles.content_container}>
                <div className={styles.text_container}>
                    <h1 className={styles.title}>
                        {props.name}
                    </h1>
                    <p className={styles.description}>
                        {props.description}
                    </p>
                </div>
                <div className={styles.info_container}>
                    <div className={styles.info_item}>
                        <p>Itens</p>
                        <span>25 itens</span>
                    </div>
                    <div className={styles.info_item}>
                        <p>Status</p>
                        <span>Disponível</span>
                    </div>
                </div>
                <div className={styles.display_container}>
                    <p className={styles.display_title}>Exibição:</p>
                    <ul className={styles.display_list}>
                        <li className={styles.display_list_item}>Seg</li>
                        <li className={styles.display_list_item}>/</li>
                        <li className={styles.display_list_item}>Qua</li>
                        <li className={styles.display_list_item}>/</li>
                        <li className={styles.display_list_item}>Sex</li>
                    </ul>
                </div>
                <Link className={styles.button} to={`/menus/${props.id}`}>Detalhes</Link>
            </div>
        </div>
    )
}

export default Menu