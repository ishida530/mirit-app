import React, { useState } from 'react';
import styles from './app.module.scss';
import cn from 'classnames';
import { CiCircleInfo, CiSettings, CiUser } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";
import TagSelectorModal from './components/TagSeLectorModal/TagSelectorModal';

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
      {isOpenTagSelector && <TagSelectorModal isOpen={setIsOpenTagSelector} />}
    </div>
  );
}

export default App;
