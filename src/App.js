import styles from './app.module.scss';
import cn from 'classnames'
import TagSelector from './components/TagSelector/TagSelector';
import { CiCircleInfo, CiSettings } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";

function App() {
  const [isOpenTagSelector, setIsOpenTagSelector] = useState(false)

  return (
    <div className={cn(`${styles.app}`)}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <CiCircleInfo />
          </li>
          <li>
            <FaRegMessage />
          </li>
          <li>
            <CiSettings />
          </li>
          <li>
            <GoTag onClick={() => setIsOpenTagSelector(!isOpenTagSelector)} />
          </li>
          <li>
            <CiUser />
          </li>
        </ul>
      </nav>
      {isOpenTagSelector && <div className={styles.overlay} />}
      {isOpenTagSelector && <TagSelector handleClose={() => setIsOpenTagSelector(false)} />}
    </div>
  );
}

export default App;
