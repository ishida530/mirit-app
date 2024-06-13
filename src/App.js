import React, { useState } from 'react';
import styles from './app.module.scss';
import cn from 'classnames';
import TagSelector from './components/TagSelector/TagSelector';
import { CiCircleInfo, CiSettings, CiUser } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";

function App() {
  const [isOpenTagSelector, setIsOpenTagSelector] = useState(false);

  return (
    <div className={cn(`${styles.app}`)}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <CiCircleInfo />
          </li>
          <li>
            <FaRegCircle />
          </li>
          <li>
            <CiSettings />
          </li>
          <li onClick={() => setIsOpenTagSelector(!isOpenTagSelector)} data-testid="go-tag">
            <GoTag />
          </li>
          <li>
            <CiUser />
          </li>
        </ul>
      </nav>
      {isOpenTagSelector && <div className={styles.overlay} data-testid="overlay" />}
      {isOpenTagSelector && <TagSelector handleClose={() => setIsOpenTagSelector(false)} data-testid="tag-selector" />}
    </div>
  );
}

export default App;
