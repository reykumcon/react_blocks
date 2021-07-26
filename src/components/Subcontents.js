import React from 'react';
import styles from '../Styles.module.css';

const Subcontent = (props) => {
    return (
        <div className={styles.content}>
            <div className={styles.subcontent}></div>
            <div className={styles.subcontent}></div>
            <div className={styles.subcontent}></div>
        </div>
    )
}

export default Subcontent;