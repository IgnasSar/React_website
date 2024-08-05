import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Button from '../Button/Button.jsx';
import UnorderedList from '../UnorderedList/UnorderedList.jsx';

import Logo from '../assets/youtube.png';
import Glass from '../assets/magnifying_glass.png';
import Microphone from '../assets/microphone.jpg';
import Camera from '../assets/camera.jpg';
import ProfilePicture from '../assets/profile_picture.jpg';
import Notifications from '../assets/notifications.png';

function Header() {

    const [input, setInput] = useState("");
    const [click, setClick] = useState(true);

    function handleInput(event) {
        setInput(event.target.value);
    }


    /* useEffect(() => {
        return (<UnorderedList/>);

    }, [click]);
 */
    return (
        <>
            
            <div className={styles.headerContainer}>
            <UnorderedList />
                <img
                    className={styles.youtubeLogo}
                    src={Logo}
                    alt="Youtube Logo"
                />

                <input
                    onChange={handleInput}
                    className={styles.searchBar}
                    type='text'
                    placeholder='Search'
                >
                </input>

                <Button
                    buttonStyle="searchButton"
                    image={Glass}
                    imageStyle="magnifyingGlass"
                    order="2"
                />

                <Button
                    buttonStyle="microphoneButton"
                    image={Microphone}
                    imageStyle="microphoneImageStyle"
                    order="3"
                />
                <Button
                    buttonStyle="button"
                    image={ProfilePicture}
                    imageStyle="buttonImage"
                    order="6"
                />
                <Button
                    buttonStyle="button"
                    image={Notifications}
                    imageStyle="buttonImage"
                    order="5"
                />
                <Button
                    buttonStyle="button"
                    image={Camera}
                    imageStyle="buttonImage"
                    order="4"
                />
            </div>
        </>
    );
}

export default Header;