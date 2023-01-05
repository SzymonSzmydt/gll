import db from './db.module.css';
import { Ball } from '../../../components/buttons/Ball';
import { useState, useRef } from 'react';
import { BtnVariant } from '../../../components/buttons/BtnVariant';
import { doc, setDoc } from "firebase/firestore"; 
import { dataBase } from '../../../context/firebase/firebase';
import { Window } from '../../../components/windows/Window';

const green = (num: number, val: number) => num === val ? db.green : "";
const arrayGenerator = (n: number) => Array.from({length: n}, (_, i)=> i + 1);
export function DbAddRecord() {
    const [ ballNumber50, setBallNumber50 ] = useState<number[]>([]);
    const [ ballNumber2, setBallNumber2 ] = useState<number[]>([]);
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
        const copy1 = ballNumber50.map(e => e);
        const copy2 = ballNumber2.map(e => e);
        if (ballNumber50.length === 5 && ballNumber2.length === 2 && dateRef.current?.value) {
            setDoc(doc(dataBase, 'jackpot', 'db'), { 
                [dateRef.current?.value] : {
                    normal1: ballNumber50, 
                    normal2: ballNumber2,
                    sort1: copy1.sort((a, b)=> a - b),
                    sort2: copy2.sort((a, b)=> a - b)
                }
            }, { merge: true });
        }
        else console.error(' błąd ')
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
            { arrayGenerator(50).map(num => <Ball key={num} handleClick={()=> handleClick50(num)}> { num }</Ball>) }
            <hr/>
            { arrayGenerator(12).map(num => <Ball key={num} handleClick={()=> handleClick2(num)}> { num }</Ball>) }  
            <input type="date" ref={dateRef} className={db.date} />
            <BtnVariant name="ZAPISZ" handleClick={saveNumbersToFirestore}/>        
        </>
    )
}