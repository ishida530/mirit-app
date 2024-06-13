import styles from './tagSelectorModal.module.scss'
import TagSelector from '../TagSelector/TagSelector'

const TagSelectorModal = ({ isOpen }) => {
    return (<>
        <div className={styles.overlay} data-testid="overlay" />
        <TagSelector handleClose={() => isOpen(false)} data-testid="tag-selector" />
    </>
    )
}

export default TagSelectorModal