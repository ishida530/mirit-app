
import styles from './tagList.module.scss'
import TagItem from '../TagItem/TagItem'
import Tag from '../Tag/Tag';
import cn from 'classnames'
const TagList = ({ list, clickItem, activeTags = false, handleRemoveTag }) => {

    const handleSelectTag = (id) => {
        clickItem(id);
    };

    if (!activeTags) {
        return (
            <ul className={styles.tagList}>
                {list.map((item) => {
                    const { isChecked, name, votes, id } = item
                    return (
                        <TagItem key={id} isChecked={isChecked} name={name} votes={votes} handleSelectTag={() => handleSelectTag(id)} />
                    )

                })}
            </ul>
        )
    } else {
        return (
            <div className={cn(styles.tagList, null, {
                [styles.active]: true,
                [styles.empty]: list.length === 0,
                
            })}>
                {list.length !== 0 ?
                    list.map(tag =>
                        <Tag key={tag.id} tag={tag} handleRemove={() => handleRemoveTag(tag.id)} />
                    ) :
                    <h2 className={styles.noTags}>Nie dodano tagów</h2>
                }
            </div>
        )
    }

}

export default TagList