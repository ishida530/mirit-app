import Divider from '../Divider/Divider'
import TagList from '../TagList/TagList'
import styles from './searchTagForm.module.scss'
import { IoIosCloseCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";



const SearchTagForm = ({ isActiveSearch, setIsActiveSearch, onSubmit, handleSearch, searchValue, handleTagClick, list }) => {

    const handleChange = (e) => {
        handleSearch(e.target.value);
    };
    const handleResetValue = () => {
        if (isActiveSearch && searchValue.length === 0) {
            setIsActiveSearch(false)

        }
        if (searchValue.length > 0) {
            handleSearch('');

        }
    }
    const handleActiveForm = () => {
        setIsActiveSearch(true)
        handleResetValue('')
    };

    if (isActiveSearch) {
        return (
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.searchField}>
                    <CiSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Wyszukaj grupę lub tag"
                    />
                    <IoIosCloseCircle onClick={handleResetValue} className={styles.resetIcon} />

                </div>
                <Divider />
                <TagList list={list} clickItem={handleTagClick} />
                <button className={styles.button} type='submit'>Zapisz</button>
            </form>)
    } else {
        return (
            <>
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

                </div>
                <Divider />
            </>
        )
    }

}

export default SearchTagForm