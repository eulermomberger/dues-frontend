import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Due } from '../../@types/Due';

import { formatDecimalNumber } from '../../utils';
import { updateDue } from '../../api';

import './styles.css';

type DueFormProps = {
  due: Due | null;
};

export const DueForm = ({ due }: DueFormProps) => {
  const [info, setInfo] = useState<string | null | undefined>(due?.informacoes_complementares);
  const navigate = useNavigate();

  const handleOnChangeInfo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInfo(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!due) return;

    event.preventDefault();

    await updateDue(due.id, Object.assign(due, { informacoes_complementares: String(info) }));

    navigate('/dues', { replace: true });
  };

  if (!due) {
    return <></>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='form-fieldset'>
        <h4>Dados Gerais</h4>

        <div className='form-group'>
          <div className='form-field'>
            <label>Declarante</label>
            <div className='input-group'>
              <input type='text' value={due.declarante_cpf_cnpj} disabled/>
              <input type='text' value={due.declarante_razao_social} disabled/>
            </div>
          </div>
        </div>

        <div className='form-group'>
          <div className='form-field'>
            <label>Identificação</label>
            <input type='text' value={due.identificacao} disabled/>
          </div>

          <div className='form-field'>
            <label>Número</label>
            <input type='text' value={due.numero} disabled/>
          </div>
        </div>

        <div className='form-group'>
          <div className='form-field'>
            <label>Moeda</label>
            <input type='text' value={due.moeda} disabled/>
          </div>

          <div className='form-field'>
            <label>Incoterm</label>
            <input type='text' value={due.incoterm} disabled/>
          </div>
        </div>

        <div className='form-group'>
          <div className='form-field'>
            <label>VMLE Moeda</label>
            <input
              type='text'
              value={formatDecimalNumber(due.total_vmle_moeda)}
              disabled
            />
          </div>

          <div className='form-field'>
            <label>VMCV Moeda</label>
            <input
              type='text'
              value={formatDecimalNumber(due.total_vmcv_moeda)}
              disabled
            />
          </div>
        </div>

        <div className='form-group'>
          <div className='form-field'>
            <label>Peso Líquido</label>
            <input
              type='text'
              value={formatDecimalNumber(due.total_peso_liquido)}
              disabled
            />
          </div>
        </div>
      </fieldset>

      <fieldset className='form-fieldset'>
        <h4>Informações Complementares</h4>
        <div className='form-group'>
          <div className='form-field'>
            <textarea value={info || ''} onChange={handleOnChangeInfo} />
          </div>
        </div>
      </fieldset>

      <fieldset className='form-fieldset form-fieldset-due-item'>
        <h4>Itens</h4>

        {
          due.due_itens.map((dueItem) => (
            <div key={dueItem.id} className='form-due-item-row'>
              <div className='form-group'>
                <div className='form-field'>
                  <label>Item</label>
                  <input type='text' value={dueItem.item} disabled/>
                </div>

                <div className='form-field'>
                  <label>Nota/Série/Item</label>
                  <input
                    type='text'
                    value={`${dueItem.nfe_numero}/${dueItem.nfe_serie}/${dueItem.nfe_item}`}
                    disabled
                  />
                </div>

                <div className='form-field'>
                  <label>Descrição complementar</label>
                  <input type='text' value={dueItem.descricao_complementar} disabled />
                </div>

                <div className='form-field'>
                  <label>NCM</label>
                  <input type='text' value={dueItem.ncm} disabled />
                </div>

                <div className='form-field'>
                  <label>Enquadramento(s)</label>
                  <input
                    type='text'
                    value={[
                      dueItem.enquadramento1,
                      dueItem.enquadramento2,
                      dueItem.enquadramento3,
                      dueItem.enquadramento4,
                    ].filter((e) => e).join(', ')}
                    disabled
                  />
                </div>

                <div className='form-field'>
                  <label>VMLE Moeda</label>
                  <input type='text' value={formatDecimalNumber(dueItem.vmle_moeda)} disabled />
                </div>

                <div className='form-field'>
                  <label>VMCV Moeda</label>
                  <input type='text' value={formatDecimalNumber(dueItem.vmcv_moeda)} disabled />
                </div>

                <div className='form-field'>
                  <label>Peso Líquido</label>
                  <input type='text' value={formatDecimalNumber(dueItem.peso_liquido)} disabled />
                </div>
              </div>
            </div>
          ))
        }
      </fieldset>

      <div className='form-footer'>
        <button
          type='submit'
          className='form-submit-button'
        >
          Salvar
        </button>
      </div>
    </form>
  );
};