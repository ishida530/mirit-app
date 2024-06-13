import styles from './tagSelector.module.scss'
import cn from 'classnames'
import { IoMdClose } from "react-icons/io";
import SearchTagForm from '../SearchTagForm/SearchTagForm';
import TagList from '../TagList/TagList';
import Divider from '../Divider/Divider';
import TagValidator from '../TagValidator/TagValidator';
import TagNav from '../TagNav/TagNav';
import { useTagSelector } from '../../hooks/useTagSelector';


const TagSelector = ({ handleClose }) => {
    const { searchValue, isActiveSearch, handleTagClick, handleSearch, handleRemoveTag, onSubmitForm ,setIsActiveSearch,list,selectedTags} = useTagSelector();

    return (
        <div className={cn(`${styles.tagSelector}`)} data-testid="tag-selector">
            <div className={cn(`${styles.header}`)}>
                <p className={cn(`${styles.headline}`)}>Tagi</p>
                <IoMdClose className={styles.closeIcon} onClick={handleClose} data-testid="close-icon" />
            </div>
            <SearchTagForm
                isActiveSearch={isActiveSearch}
                setIsActiveSearch={setIsActiveSearch}
                onSubmit={onSubmitForm}
                handleSearch={handleSearch}
                searchValue={searchValue}
                list={list}
                handleRemoveTag={handleRemoveTag}
                handleTagClick={handleTagClick}
            />
            {!isActiveSearch &&
                <>

                    <TagList list={selectedTags} activeTags handleRemoveTag={handleRemoveTag} />
                    <Divider />
                    <TagNav />
                    {selectedTags.length !== 0 && <Divider />}
                    <TagValidator activeTagsNumber={selectedTags.length} />
                </>
            }



        </div>
    )
}

export default TagSelector