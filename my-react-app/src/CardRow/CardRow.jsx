import React, { useState } from 'react';
import styles from './CardRow.module.css';
import Card from '../Card/Card.jsx';

function CardRow() {

    const cards = Array.from({length: 5});

    return (
        <div className={styles.cardRowContainer}>
            {
                cards.map((item, index) => (
                    <Card key = {index}/>
                )
            )
            }
        </div>
    );
}

export default CardRow;