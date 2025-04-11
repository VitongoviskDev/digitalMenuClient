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
  const [reloadTrigger, setReloadTrigger] = useState(false);


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
  }, [reloadTrigger]); // roda novamente sempre que reloadTrigger muda


  const onDeleteItemClicked = (item: ProductDTO) => {
    setDeleteItem(item);
  }

  const handlePopupButtonClick = async (del: boolean) => {
    if (del && deleteItem) {
      try {
        const response = await api.get(`/menus/${id}`);
        const updatedProducts = response.data.products.filter(
          (product: ProductDTO) => product.id !== deleteItem.id
        );

        await api.put(`/menus/${id}`, {
          ...response.data,
          products: updatedProducts
        });

        setDeleteItem(null); // fecha o popup
        setReloadTrigger(prev => !prev); // força o useEffect rodar de novo
      } catch (error) {
        console.error('Erro ao excluir item:', error);
      }
    }
    setDeleteItem(null); // só fecha o popup
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
              <p className={styles.items_label}>Itens <span>(26)</span></p>
              <div className={styles.items_container}>
                <ul className={styles.items_list}>
                  {
                    menu.products.map((item, index) => {
                      item.imageUri = menu.imageUri;
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