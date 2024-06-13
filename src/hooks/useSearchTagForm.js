
export const useSearchTagForm = (handleSearch, isActiveSearch, searchValue, setIsActiveSearch) => {
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

    return {
        handleChange,
        handleResetValue,
        handleActiveForm
    }
}

