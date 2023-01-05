import db from './db.module.css';
import { useState } from 'react';
import { DbAddRecord } from './DbAddRecord';
import { DbView } from './DbView';
import { WindowShadow } from '../../../components/windows/WindowShadow';
import { BtnVariant } from '../../../components/buttons/BtnVariant';

export function DataBase() {
    const [ dbAdd, setDbAdd ] = useState(false);
    return (
        <WindowShadow>
            <BtnVariant 
                name={dbAdd ? "BAZA RECORDÓW" : "DODAJ RECORD" } 
                handleClick={()=> setDbAdd(!dbAdd)} 
            />
            <section className={db.allBalls}>
                { dbAdd ? <DbAddRecord /> : <DbView /> }
            </section>
        </WindowShadow>
    )
}