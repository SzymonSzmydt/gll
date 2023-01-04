import db from './db.module.css';
import { Ball } from '../../../components/buttons/Ball';
import { useState, useRef } from 'react';
import { Window } from '../../../components/windows/Window';
import { BtnVariant } from '../../../components/buttons/BtnVariant';
import { doc, setDoc } from "firebase/firestore"; 
import { dataBase } from '../../../context/firebase/firebase';

const green = (num: number, val: number) => num === val ? db.green : "";

export function DbAddRecord() {
    const [ ballNumber50, setBallNumber50 ] = useState<number[]>([]);
    const [ ballNumber2, setBallNumber2 ] = useState<number[]>([]);
    const numbers50 = Array.from({length: 50}, (_, i)=> i + 1);
    const numbers10 = Array.from({length: 12}, (_, i)=> i + 1);
    const dateRef = useRef<HTMLInputElement | null>(null);

    const handleClick50 = (num:number) => {
        if (ballNumber50.length < 5 && !ballNumber50.includes(num)) setBallNumber50([...ballNumber50, num]);
        return;
    }
    const handleClick2 = (num:number) => {
        if (ballNumber2.length < 2 && !ballNumber2.includes(num)) setBallNumber2([...ballNumber2, num]);
        return;
    }
    const saveNumbersToFirestore = async() => {
        if (ballNumber50.length === 5 && ballNumber2.length === 2 && dateRef.current?.value) {
            const sortAll = ballNumber50.sort((a, b)=> a - b);
            const sortTwo = ballNumber2.sort((a, b)=> a - b);
            setDoc(doc(dataBase, 'jackpot', 'db'), { 
                date: dateRef.current?.value,
                normalAll: ballNumber50, 
                normalTwo: ballNumber2,
                sortAll: sortAll,
                sortTwo: sortTwo
            }, { merge: true });
        }
    }
    return (
        <>
            <Window> 
                <div className={db.selectedNumbers}> 
                    <span className={db.number50}> 
                        { ballNumber50.map(num => <Ball key={num}> { num } </Ball>)} 
                    </span>              
                    <span className={`${db.signal} ${green(ballNumber50.length, 5)}`}/>
                    <span className={`${db.signal} ${green(ballNumber2.length, 2)}`}/>
                    <span className={db.number2}> 
                        { ballNumber2.map(num => <Ball key={num}> { num } </Ball>)} 
                    </span>
                </div> 
            </Window>
            { numbers50.map(num => <Ball key={num} handleClick={()=> handleClick50(num)}> { num }</Ball>) }
            <hr/>
            { numbers10.map(num => <Ball key={num} handleClick={()=> handleClick2(num)}> { num }</Ball>) }  
            <input type="date" ref={dateRef} className={db.date} />
            <BtnVariant name="ZAPISZ" handleClick={saveNumbersToFirestore}/>        
        </>
    )
}