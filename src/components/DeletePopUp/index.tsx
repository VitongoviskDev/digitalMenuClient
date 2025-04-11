import React from 'react'

import styles from './DeletePopUp.module.css';

interface DeletePopUpProps {
    onButtonClicked: (delte: boolean) => void;
}

const DeletePopUp = (props: DeletePopUpProps) => {

    const handleButtonClicked = (del: boolean) => {
        props.onButtonClicked(del);
    }

    return (
        <div className={styles.popup_container}>
            <div className={styles.popup_content}>
                <h2 className={styles.popup_title}>Excluir item</h2>
                <p className={styles.popup_text}>Você tem certeza que deseja excluir este item?</p>
                <div className={styles.popup_buttons_container}>
                    <button className={`${styles.buton} ${styles.confirm}`} onClick={() => handleButtonClicked(true)}>Confirmar</button>
                    <button className={`${styles.buton} ${styles.cancel}`} onClick={() => handleButtonClicked(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopUp