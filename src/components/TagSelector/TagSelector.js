import styles from './tagSelector.module.scss'
import cn from 'classnames'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { tagsList } from '../../dummyData';
import SearchTagForm from '../SearchTagForm/SearchTagForm';
import TagList from '../TagList/TagList';
import Divider from '../Divider/Divider';
import TagValidator from '../TagValidator/TagValidator';
import TagNav from '../TagNav/TagNav';


const TagSelector = ({ handleClose }) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [list, setList] = useState(tagsList)

    const [isActiveSearch, setIsActiveSearch] = useState(false)
    const updateCheckedTags = (id) => {
        return list.map(tag => {
            if (tag.id === id) {
                tag.isChecked = !tag.isChecked;
                return tag;
            }
            return tag;
        });
    }
    const handleTagClick = (id) => {
        setList(updateCheckedTags(id));
    };

    const handleSearch = (value) => {
        setSearchValue(value);
        const filteredList = tagsList.filter(tag =>
            tag.name.toLowerCase().includes(value.toLowerCase())
        );
        setList(filteredList);
    };

    const handleRemoveTag = (id) => {
        const updatedList = updateCheckedTags(id)
        const newSelectedTags = selectedTags.filter(tag => tag.id !== id);
        setList(updatedList);
        setSelectedTags(newSelectedTags);
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(list)
        const newSelectedTags = list.filter(tag => tag.isChecked === true)
        setSelectedTags(newSelectedTags)
        console.log(selectedTags)
        setIsActiveSearch(false)
        setSearchValue('')
    }



    return (
        <div className={cn(`${styles.tagSelector}`)}>
            <div className={cn(`${styles.header}`)}>
                <p className={cn(`${styles.headline}`)}>Tagi</p>
                <IoMdClose className={styles.closeIcon} onClick={handleClose} />
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