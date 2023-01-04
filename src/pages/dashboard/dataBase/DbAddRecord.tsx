import db from './db.module.css';
import { Ball } from '../../../components/buttons/Ball';
import { useState } from 'react';
import { Window } from '../../../components/windows/Window';

export function DbAddRecord() {
    const [ ballNumber, setBallNumber ] = useState<number[]>([]);
    const numbers50 = Array.from({length: 50}, (_, i)=> i + 1);
    const numbers10 = Array.from({length: 10}, (_, i)=> i + 1);

    const handleClick = (num:number) => {
        if (ballNumber.length < 5 && !ballNumber.includes(num)) setBallNumber([...ballNumber, num]);
        return;
    }
    return (
        <>
            <Window> 
                <div className={db.selectedNumbers}> { ballNumber.map(num => <Ball> { num } </Ball>)} </div> 
            </Window>
            { numbers50.map(num => <Ball handleClick={()=> handleClick(num)}> { num }</Ball>) }
            <hr/>
            { numbers10.map(num => <Ball handleClick={()=> handleClick(num)}> { num }</Ball>) }
            
                       
        </>
    )
}