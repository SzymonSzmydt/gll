import db from './db.module.css';
import { Ball } from '../../../components/buttons/Ball';
import { useState } from 'react';
import { Window } from '../../../components/windows/Window';

const green = (num: number, val: number) => num === val ? db.green : "";

export function DbAddRecord() {
    const [ ballNumber50, setBallNumber50 ] = useState<number[]>([]);
    const [ ballNumber2, setBallNumber2 ] = useState<number[]>([]);
    const numbers50 = Array.from({length: 50}, (_, i)=> i + 1);
    const numbers10 = Array.from({length: 10}, (_, i)=> i + 1);

    const handleClick50 = (num:number) => {
        if (ballNumber50.length < 5 && !ballNumber50.includes(num)) setBallNumber50([...ballNumber50, num]);
        return;
    }
    const handleClick2 = (num:number) => {
        if (ballNumber2.length < 2 && !ballNumber2.includes(num)) setBallNumber2([...ballNumber2, num]);
        return;
    }
    return (
        <>
            <Window> 
                <div className={db.selectedNumbers}> 
                    <span className={db.number50}> 
                        { ballNumber50.map(num => <Ball> { num } </Ball>)} 
                    </span>              
                    <span className={`${db.signal} ${green(ballNumber50.length, 5)}`}/>
                    <span className={`${db.signal} ${green(ballNumber2.length, 2)}`}/>
                    <span className={db.number2}> 
                        { ballNumber2.map(num => <Ball> { num } </Ball>)} 
                    </span>
                </div> 
            </Window>
            { numbers50.map(num => <Ball handleClick={()=> handleClick50(num)}> { num }</Ball>) }
            <hr/>
            { numbers10.map(num => <Ball handleClick={()=> handleClick2(num)}> { num }</Ball>) }          
        </>
    )
}