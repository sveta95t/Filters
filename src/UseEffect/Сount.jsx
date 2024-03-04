import React, { useState, useEffect } from 'react'

function Сount() {

    const [count, setCount] = useState(
    Number(localStorage.getItem("numberr"))?? 0
    );

    useEffect(()=>{
        localStorage.setItem("number", count);
    },[count]); //добавляем новое число в localStorage 

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=> setCount(count+1)}>+ </button>
        </div>
  )
}

export default Сount;



//Теперь это число будем записывать не в console log а в  local storage 
//Как мы это пишем? 
