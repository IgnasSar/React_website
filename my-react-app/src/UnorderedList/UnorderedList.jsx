import React, { useState } from 'react';
import styles from './UnorderedList.module.css';

import Menu from '../assets/hamburger_button.jpg';
import House from '../assets/house.jpg';
import Shorts from '../assets/shorts.png';
import Subscription from '../assets/subscription.webp';
import You from '../assets/you.png';

function UnorderedList() {
    const [showList, setShowList] = useState(false);
    const listItems = ['Pagrindinis', 'Shorts', 'Prenumeratos', 'Jūs'];
    const imageItems = [House, Shorts, Subscription, You];

    const handleVisibility = () => {
        setShowList(!showList);
    };

    return (
        <div className={styles.listButtonContainer}>
            <button
                className={styles.listButton}
                onClick={handleVisibility}
            >
                <img
                    className={styles.listButtonImage}
                    src={Menu}
                />
            </button>
            {showList === false ? (
                <div className={styles.listContainerSmall}>
                    <ul className={styles.unorderedList}>
                        {listItems.map((item, index) => (
                            <li className={styles.listMemberSmall} key={index}>
                                <button className={styles.listMemberSmallButton}>
                                    <img
                                        className={styles.listMemberSmallImage}
                                        src={imageItems[index]}
                                    />
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className={styles.listContainer}>
                    <ul className={styles.unorderedList}>
                        {listItems.map((item, index) => (
                            index !== 3 && (
                                <li
                                    className={styles.listMember}
                                    key={index}
                                >
                                    <button className={styles.listMemberButton}>
                                        <img
                                            className={styles.listMemberImage}
                                            src={imageItems[index]}
                                        />
                                        {item}
                                    </button>
                                </li>
                            )
                        ))}
                    </ul>
                    <hr className={styles.hr} />
                </div>
            )
            }
        </div >
    );
}

export default UnorderedList;