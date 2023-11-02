import { useRef, useState } from 'react';
import { readJsonFile } from '../../utils';
import { createDue } from '../../api';
import { DueJson } from '../../@types/Due';

import './styles.css';

type ButtonReadFileProps = {
  refreshList: () => void;
};

export const ButtonReadFile = ({ refreshList }: ButtonReadFileProps) => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleShowInput = () => {
    setShowInput(true);
  };

  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      try {
        const fileText = await readJsonFile(event.target.files[0]) as DueJson;
        setShowInput(false);

        await createDue(fileText);

        refreshList();

        if (inputRef.current) {
          inputRef.current.value = '';
        }
      } catch {
        alert('Ops, algo deu errado');
      }
    }
  }

  return (
    <>
      <input
        type='file'
        accept='.json,application/json'
        className={showInput ? '' : 'hide'}
        ref={inputRef}
        onChange={onInputChange}
      />

      <button
        className='btn-read-file'
        onClick={handleShowInput}
      >
        Fazer upload de uma DU-E
      </button>
    </>
  );
};
