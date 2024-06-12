import React from 'react'
import { IoMdClose } from "react-icons/io";
import styles from './tag.module.scss'
const Tag = ({ tag, handleRemove }) => {
    const { name } = tag
    return (
        <span className={styles.tag}>
            <p>{name}</p>
            <IoMdClose onClick={handleRemove} fontSize={20} />
        </span>
    )
}

export default Tag