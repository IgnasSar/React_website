import React, { useState } from 'react';
import styles from './UnorderedList.module.css';
import Menu from '../assets/hamburger_button.jpg';

function UnorderedList() {
    const [showList, setShowList] = useState(false);
    const listItems = ['Home', 'Shorts', 'Subscribed'];

    const handleVisibility = () => {
        setShowList(!showList);
    };

    return (
        <div>
            <button className={styles.listButton} onClick={handleVisibility}>
                <img className={styles.listButtonImage} src={Menu} />
            </button>
            {showList && (
                <ul>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UnorderedList;