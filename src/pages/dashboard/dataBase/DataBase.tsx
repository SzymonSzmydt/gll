import db from './db.module.css';
import { Window } from '../../../components/windows/Window';
import { useState } from 'react';
import { DbAddRecord } from './DbAddRecord';
import { DbView } from './DbView';
import { BtnVariant } from '../../../components/windows/buttons/BtnVariant';

export function DataBase() {
    const [ dbAdd, setDbAdd ] = useState(false);
    return (
        <Window>
            <BtnVariant name="Utwórz record" handleClick={()=> setDbAdd(!dbAdd)} />
            { dbAdd ? <DbAddRecord /> : <DbView /> }
        </Window>
    )
}