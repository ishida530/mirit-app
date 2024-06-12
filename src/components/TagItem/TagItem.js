import styles from './tagItem.module.scss'
const TagItem = ({ isChecked, name, votes, handleSelectTag, id }) => {
    const handleChange = () => {
        handleSelectTag(id);
    };

    return (
        <li className={styles.tagItem}>
            <label htmlFor={name}>
                <input type="checkbox" name={name} checked={isChecked} onChange={handleChange} />

                {name}
            </label>
            <span>+{votes}</span>
        </li>
    )
}

export default TagItem