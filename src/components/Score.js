import React from 'react'
import {useContext} from 'react'
import { DataContext } from '../App';
import './score.css'
import AnimatedNumber from "animated-number-react";

function Score() {

    const {score,setScore} = useContext(DataContext);
 
  return (
    <div className='score'>
        <h2>คะแนนของคุณคือ</h2>
        <div className="score-box">
            <h1 className='score-num'> <AnimatedNumber 
                    value ={score} 
                    duration = {500}  
                    formatValue = {n => n.toFixed(0)} 
                />
            </h1>
        </div>

    </div>
  )
}

export default Score