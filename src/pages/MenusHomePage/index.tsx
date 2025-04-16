import React from 'react'

import styles from './MenusHomePage.module.css';
import { Link } from 'react-router-dom';

import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";

const MenusHomePage = () => {
  return (
    <div className={styles.menu_home_page}>
      <h1 className={styles.page_title}>Onde você quer comer?</h1>
      <div className={styles.options_container}>
        <Link className={styles.option} to={'/menus/restaurant/today'}><IoRestaurantOutline/></Link>
        <Link className={styles.option} to={'/menus/delivery/today'}><MdOutlineDeliveryDining/></Link>
      </div>
    </div>
  )
}

export default MenusHomePage