import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

import { DueForm } from '../../components/DueForm';

import { getDue } from '../../api';

import { Due } from '../../@types/Due';

import './styles.css';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.dueId) return;

  const { due } = await getDue(parseInt(params.dueId, 10));

  return due;
}

export const DueEdit = () => {
  const due = useLoaderData() as Due;

  return (
    <>
      <header className='form-header'>
        <h2>Editar DU-E</h2>
      </header>

      <main>
        <DueForm due={due}/>
      </main>
    </>
  );
};
