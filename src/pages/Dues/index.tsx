import { useState } from 'react';

import { ButtonReadFile } from '../../components/ButtonReadFile';
import { DuesList } from '../../components/DuesList';

import './styles.css';

export const Dues = () => {
  const [refreshList, setRefreshList] = useState(false);

  return (
    <>
      <header className='app-header'>
        <ButtonReadFile
          refreshList={() => setRefreshList(!refreshList)}
        />
      </header>

      <main>
        <DuesList
          refreshList={refreshList}
        />
      </main>
    </>
  );
}

