import { Ball } from '../../../components/windows/buttons/Ball';
import { useState } from 'react';

export function DbAddRecord() {
    const [ ballNumber, setBallNumber ] = useState<number[]>([]);
    const numbers = Array.from({length: 50}, (_, i)=> i + 1);

    const handleClick = (num:number) => {
        if (ballNumber.length < 5) setBallNumber([...ballNumber, num]);
        return;
    }
    return (
        <>
            <div> { ballNumber.map(num => <Ball> { num } </Ball>)} </div>
            { numbers.map(num => <Ball handleClick={()=> handleClick(num)}> { num }</Ball>) }           
        </>
    )
}