import db from './db.module.css';
import { useState } from 'react';
import { DbAddRecord } from './DbAddRecord';
import { DbView } from './DbView';
import { BtnVariant } from '../../../components/buttons/BtnVariant';
import { Window } from '../../../components/windows/Window';

export function DataBase() {
    const [ dbAdd, setDbAdd ] = useState(false);
    return (
        <Window>
            <BtnVariant 
                name={dbAdd ? "BAZA RECORDÓW" : "DODAJ RECORD" } 
                handleClick={()=> setDbAdd(!dbAdd)} 
            />
            <section className={db.allBalls}>
                { dbAdd ? <DbAddRecord /> : <DbView /> }
            </section>
        </Window>
    )
}