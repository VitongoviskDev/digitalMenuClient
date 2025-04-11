import React from 'react'

import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

import styles from './MenuItemCard.module.css';
import { ProductDTO } from '../../dtos/ProductDTO';

interface MenuItemCardProps{
    item: ProductDTO;
    onDeleteItemClicked: (item: ProductDTO) => void;
}

const MenuItemCard = (props: MenuItemCardProps) => {
    const handleDeleteItem = () => {
        props.onDeleteItemClicked(props.item);
    }
    return (
        <div className={styles.item_card}>
            <div className={styles.image_container}>
                <img className={styles.item_image} src={props.item.imageUrl} alt={`imagem: ${props.item.name}`} />
            </div>
            <div className={styles.item_data_container}>
                <p className={styles.item_name}>{props.item.name}</p>
                <p className={styles.item_description}>{props.item.description}</p>
                <div className={styles.item_data_bottom}>
                    <p className={styles.item_price}>{props.item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <div className={styles.item_buttons}>
                        <button className={styles.item_button}><AiOutlineEdit /></button>
                        <button className={styles.item_button} onClick={handleDeleteItem}><AiOutlineDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard