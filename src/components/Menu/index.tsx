import React from 'react'
import { MenuMinDTO } from '../../dtos/MenuMinDTO'

const Menu = (props: MenuMinDTO) => {
  return (
    <div className={styles.menu_container}>
        <div className={styles.image_container}>
            <img src={props.image} alt="" />
        </div>
        <h1 className={styles.menu_title}>
            {props.name}
        </h1>
    </div>
  )
}

export default Menu