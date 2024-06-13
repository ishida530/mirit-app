import Divider from '../Divider/Divider'
import TagList from '../TagList/TagList'
import styles from './searchTagForm.module.scss'
import { IoIosCloseCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useSearchTagForm } from '../../hooks/useSearchTagForm';



const SearchTagForm = ({ isActiveSearch, setIsActiveSearch, onSubmit, handleSearch, searchValue, handleTagClick, list }) => {

    const {
        handleChange,
        handleResetValue,
        handleActiveForm
    } = useSearchTagForm(handleSearch, isActiveSearch, searchValue, setIsActiveSearch);
    
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