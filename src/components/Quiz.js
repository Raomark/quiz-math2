import React,{useContext, useEffect, useState} from 'react'
import { DataContext } from '../App'
import QuestionMath from '../Questionmath'

function Quiz() {
    const {state, setState} = useContext(DataContext);
    const {score,setScore} = useContext(DataContext);
    const [current, setCurrent] = useState(0);
    const [select, setSelect] = useState('');

    useEffect(()=>{
        check();
         // eslint-disable-next-line
    },[select])

    const check = () =>{
        if(select !== ''){
            if(select === QuestionMath[current].answer){
                setScore(score + 1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }

    const nextQuestion = () =>{
        setSelect('')
        setCurrent(current + 1)
        if(current === QuestionMath.length-1){
            setState('score')
        }
    }

    return (
        <div>
            <div className="container-quiz">
                <small>คณิตสาสตร์ระดับเริ่มต้น</small>
                <div className="question-quiz">
                    <small>Question: {current + 1}/{QuestionMath.length}</small>
                    <h1>{QuestionMath[current].question}</h1>
                </div>
                <div className="answer-quiz">
                   <button onClick={(e)=> setSelect('A')}>{QuestionMath[current].A}</button>
                   <button onClick={(e)=> setSelect('B')}>{QuestionMath[current].B}</button>
                   <button onClick={(e)=> setSelect('C')}>{QuestionMath[current].C}</button>
                   <button onClick={(e)=> setSelect('D')}>{QuestionMath[current].D}</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz