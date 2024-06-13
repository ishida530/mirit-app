import Divider from '../Divider/Divider'
import TagList from '../TagList/TagList'
import styles from './searchTagForm.module.scss'
import { useSearchTagForm } from '../../hooks/useSearchTagForm';
import SearchField from '../SearchField/SearchField';



const SearchTagForm = ({ isActiveSearch, setIsActiveSearch, onSubmit, handleSearch, searchValue, handleTagClick, list }) => {

    const {
        handleChange,
        handleResetValue,
        handleActiveForm
    } = useSearchTagForm(handleSearch, isActiveSearch, searchValue, setIsActiveSearch);

    if (isActiveSearch) {
        return (
            <form onSubmit={onSubmit} className={styles.form}>
                <SearchField handleChange={handleChange} handleResetValue={handleResetValue} searchValue={searchValue} resetIcon />
                <Divider />
                <TagList list={list} clickItem={handleTagClick} />
                <button className={styles.button} type='submit'>Zapisz</button>
            </form>)
    } else {
        return (
            <>
                <SearchField handleChange={handleChange} handleResetValue={handleResetValue} searchValue={searchValue} handleActiveForm={handleActiveForm} />
                <Divider />
            </>
        )
    }
}

export default SearchTagForm