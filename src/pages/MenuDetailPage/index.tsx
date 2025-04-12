import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../axiosConfig';
import { MenuDTO } from '../../dtos/MenuDTO';

import styles from './MenuDetailsPage.module.css';
import MenuItemCard from '../../components/MenuItemCard';
import { Link } from 'react-router-dom';

import { IoMdArrowBack } from "react-icons/io";
import { ProductDTO } from '../../dtos/ProductDTO';
import DeletePopUp from '../../components/DeletePopUp';

const MenuDetailsPage = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState<MenuDTO>();
  const [deleteItem, setDeleteItem] = useState<ProductDTO | null>(null);


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
  }, []); // roda novamente sempre que reloadTrigger muda


  const onDeleteItemClicked = (item: ProductDTO) => {
    setDeleteItem(item);
  }

  const handlePopupButtonClick = async (del: boolean) => {
    const updateMenu = async () => {
      if (del && deleteItem) {
        try {
          const updatedProducts = menu!.products.filter(
            (product: ProductDTO) => product.id !== deleteItem.id
          )

          const updateMenu: MenuDTO = { ...menu!, products: updatedProducts };

          const response = await api.put(`/menus/${id}`, updateMenu);

          setMenu(response.data);
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
            <Link className={styles.back_arrow} to={"/menus"}>
              <IoMdArrowBack className={styles.icon} />
              <p className={styles.text}>Menus</p>
            </Link>
            <div className={styles.header}>
              <img className={styles.menu_image} src={menu.imageUri} alt="" />
            </div>
            <div className={styles.menu_data_container}>
              <h2 className={styles.title}>{menu.name}</h2>
              <p className={styles.description}>{menu.description}</p>
              <p className={styles.items_label}>Itens <span>({menu.products.length})</span></p>
              <div className={styles.items_container}>
                <ul className={styles.items_list}>
                  {
                    menu.products.map((item, index) => {
                      item.imageUrl = menu.imageUri;
                      return <MenuItemCard key={index} item={item} onDeleteItemClicked={onDeleteItemClicked} />
                    })
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