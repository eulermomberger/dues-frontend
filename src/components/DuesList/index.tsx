import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Due } from '../../@types/Due';

import { getAllDues } from '../../api';
import { formatDecimalNumber } from '../../utils';

import './styles.css';

type DuesListProps = {
  refreshList: boolean;
};

export const DuesList = ({ refreshList }: DuesListProps) => {
  const [dues, setDues] = useState<Due[]>([]);

  const fetchDues = async () => {
    const data = await getAllDues();

    setDues(data.dues as Due[]);
  };

  useEffect(() => {
    fetchDues();
  }, [refreshList]);

  return (
    <table className='dues-table'>
      <thead>
        <tr>
          <th>Declarante</th>
          <th>Identificação</th>
          <th>Número</th>
          <th>Moeda</th>
          <th>VMCV Moeda</th>
          <th>VMLE Moeda</th>
          <th>Peso Líquido</th>
        </tr>
      </thead>
      <tbody>
        {dues.map((due) => (
          <tr key={due.id}>
            <td>
              <Link to={`/dues/${due.id}`}>
                {due.declarante_cpf_cnpj} - {due.declarante_razao_social}
              </Link>
            </td>
            <td>
              <Link to={`/dues/${due.id}`}>
                {due.identificacao}
              </Link>
            </td>
            <td>
              <Link to={`/dues/${due.id}`}>
                {due.numero}
              </Link>
            </td>
            <td>
              <Link to={`/dues/${due.id}`}>
                {due.moeda}
              </Link>
            </td>
            <td>
              <Link to={`/dues/${due.id}`}>
                {formatDecimalNumber(due.total_vmcv_moeda)}
              </Link>
            </td>
            <td>
              <Link to={`/dues/${due.id}`}>
                {formatDecimalNumber(due.total_vmle_moeda)}
              </Link>
            </td>
            <td>
              <Link to={`/dues/${due.id}`}>
                {formatDecimalNumber(due.total_peso_liquido)}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};