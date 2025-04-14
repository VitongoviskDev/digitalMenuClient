import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../../axiosConfig';
import { MenuDTO } from '../../../dtos/MenuDTO';

import styles from './MenuDetailsPage.module.css';
import { Link } from 'react-router-dom';

import { IoMdArrowBack } from "react-icons/io";
import { ProductDTO } from '../../../dtos/ProductDTO';
import DeletePopUp from '../../../components/DeletePopUp';
import MenuSectionContainer from '../../../components/MenuSectionContainer/index.';
import { MenuSectionDTO } from '../../../dtos/MenuSectionDTO';

const MenuDetailsPage = () => {
  const { id } = useParams();

  interface sectionItem {
    section: MenuSectionDTO,
    item: ProductDTO
  }

  const [menu, setMenu] = useState<MenuDTO>();
  const [deleteItem, setDeleteItem] = useState<sectionItem | null>(null);

  const fetchMenu = async () => {
    try {
      const response = await api.get(`/menus/${id}`);
      setMenu(response.data);
    } catch (error) {
      console.error('Erro ao buscar menu:', error);
    }
  };
  useEffect(() => {
    fetchMenu();
    console.log("fecthing");
  }, []);


  const onDeleteItemClicked = (section: MenuSectionDTO, item: ProductDTO) => {
    setDeleteItem({ section, item });
  }

  const handlePopupButtonClick = async (del: boolean) => {
    const updateMenu = async () => {
      if (del && deleteItem) {
        try {
          const updatedProducts = deleteItem.section.products.filter(
            (product: ProductDTO) => product.id !== deleteItem.item.id
          )

          const updateSection: MenuSectionDTO = { ...deleteItem.section, products: updatedProducts };

          await api.put(`/sections/${deleteItem.section.id}`, updateSection);
          
          fetchMenu();
        } catch (error) {
          console.error('Erro ao excluir item:', error);
        }
      }
    }

    updateMenu();

    setDeleteItem(null);
  };

  return (
    <div>
      {
        deleteItem ? <DeletePopUp onButtonClicked={handlePopupButtonClick} /> : <></>
      }
      {
        menu ?
          <div className={styles.page_container}>
            <Link className={styles.back_arrow} to={"/admin/menus"}>
              <IoMdArrowBack className={styles.icon} />
              <p className={styles.text}>Menus</p>
            </Link>
            <div className={styles.header}>
              <img className={styles.menu_image} src={menu.imageUri} alt="" />
            </div>
            <div className={styles.menu_data_container}>
              <h2 className={styles.title}>{menu.name}</h2>
              <p className={styles.description}>{menu.description}</p>
              <p className={styles.items_label}>Itens <span>({menu.itemsAmount})</span></p>
              <MenuSectionContainer menu={menu} onDeleteItemClicked={onDeleteItemClicked} />
            </div>
          </div> :
          <>

          </>
      }
    </div>
  )
}

export default MenuDetailsPage