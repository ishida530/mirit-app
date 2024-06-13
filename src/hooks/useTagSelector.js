import { useState } from "react";
import { tagsList } from "../dummyData";

export const useTagSelector = () => {

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
        const newSelectedTags = list.filter(tag => tag.isChecked === true)
        setSelectedTags(newSelectedTags)
        setIsActiveSearch(false)
        setSearchValue('')
    }


    return { searchValue, isActiveSearch, handleTagClick, handleSearch, handleRemoveTag, onSubmitForm, setIsActiveSearch, list, selectedTags }
}
