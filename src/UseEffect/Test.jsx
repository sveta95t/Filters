import React from 'react';
import {useState,useEffect} from 'react';


function Test() {

    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log("Test!!! ===>", count);
    
    },[count])
    
    return (
    <div>
        <button onClick={() => setCount(count+1)}>+</button>
        <p>{count}</p>
        </div>
        //  с помощю UseEffect мы вызовем  console.log  
        //  как мы работаем с  UseEffect , так как у нас это Хук, 
        //  мы  берем эту функцию из пакета react import {UseState, UseEffect} from React;
        //  принимает 2 аргумента ; 
        //  1 -е - функция эффекта,call back function useEffectt(()=>{}) что должно произойти мы передаем через call back function 
        //  2 - е - [count] - это массив зависимостей - список переменных, который реакт будет отслеживать после рендинга
        //  то действие которое мы передаем UseEffect (call back function ) сработаеет только тогда
        //  когда у нас поменяется что то из этих переменных, у нас в данном случае массив зависимостей ккоторый 
        //  меняется это переменная count
         
      )
    }


export default Test