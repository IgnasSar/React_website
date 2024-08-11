import React, { useState } from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';

import ProfilePic from '../assets/profile_pic.avif';
import ProfilePicture from '../assets/profile_picture.jpg';
import ThreeDots from '../assets/three_dots.png';

function Card() {
    return (
        <div className={styles.cardContainer}>
            <img
                className={styles.cardImage}
                src={ProfilePic}
                alt="profile picture"
            />
            <div className={styles.underVideoContainer}>
                <Button
                    buttonStyle="cardButton"
                    image={ProfilePicture}
                    imageStyle="cardButtonImage"
                />
                <div className={styles.underVideoTextContainer}>
                    <h3>Video title</h3>
                    <p>Creator</p>
                    <p>View count & upload time</p>
                </div>
                <Button
                    buttonStyle="cardDotsButton"
                    image={ThreeDots}
                    imageStyle="cardDotsButtonImage"
                />
            </div>
        </div>
    );
}

export default Card;