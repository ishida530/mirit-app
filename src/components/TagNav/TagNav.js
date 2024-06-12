import React from 'react'
import { WiStars } from "react-icons/wi";
import { AiOutlineTag } from "react-icons/ai";
import styles from './tagNav.module.scss'
import cn from 'classnames';

const TagNav = () => {
    return (
        <nav className={styles.tagNav}>
            <ul>
                <li>
                    <a className={styles.disabledLink} href='#' >
                        <WiStars />
                        <span>
                            CMS AI
                        </span>

                    </a>
                </li>
                <li>
                    <a href='#' >
                        <WiStars />

                        <span>  Analizuj tekst</span>
                    </a>
                </li>
                <li>


                    <a href='#' >
                        <AiOutlineTag />
                        <span>     Najbardziej popularne tagi</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default TagNav