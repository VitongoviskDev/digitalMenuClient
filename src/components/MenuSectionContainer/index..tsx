import React from 'react'
import MenuItemCard from '../MenuItemCard';

import styles from './MenuSectionContainer.module.css'
import { MenuDTO } from '../../dtos/MenuDTO';
import { ProductDTO } from '../../dtos/ProductDTO';
import { MenuSectionDTO } from '../../dtos/MenuSectionDTO';
import { prefetchDNS } from 'react-dom';

interface MenuSectionProps {
    menu: MenuDTO;
    onDeleteItemClicked: (menuSection: MenuSectionDTO, item: ProductDTO) => void;
}

const MenuSectionContainer = (props: MenuSectionProps) => {

    const handleDeleteItemClicked = (menuSection: MenuSectionDTO, item: ProductDTO) => {
        props.onDeleteItemClicked(menuSection, item);
    }
    
    return (
        <div className={styles.sections_container}>
            <ul className={styles.sections_list}>
                {
                    props.menu.menuSections.map((section, index) => (
                        <li key={index} className={styles.section_item}>
                            <h3>{section.name}</h3>
                            <ul className={styles.items_list}>
                                {
                                    section.products.map((prod, index) => {
                                        prod.imageUrl = props.menu.imageUri;
                                        return <MenuItemCard key={index} item={prod} onDeleteItemClicked={() => handleDeleteItemClicked(section, prod)} />
                                    })
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuSectionContainer