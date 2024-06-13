import { IoIosCloseCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import styles from './searchField.module.scss'

const SearchField = ({ searchValue, handleChange, handleResetValue, resetIcon = false, handleActiveForm }) => {
    return (
        <div className={styles.searchField}>
            <CiSearch className={styles.searchIcon} />
            <input
                type="text"
                value={searchValue}
                onChange={handleChange}
                className={styles.input}
                placeholder="Wyszukaj grupę lub tag"
                onClick={handleActiveForm}
            />
            {resetIcon && <IoIosCloseCircle onClick={handleResetValue} className={styles.resetIcon} />}
        </div>
    )
}

export default SearchField