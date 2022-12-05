import React,{useContext, useState} from 'react'
import { DataContext } from '../App'


function Menu() {
    const {state, setState} = useContext(DataContext);
    return (
        <div className='menu'>
            <main>
                <h1>แบบทดสอบคณิตศาสตร์</h1>
                <p>จัดทำเพื่อทดสอบการคำนวณคณิตศาสตร์เบื้องต้น</p>
                <button onClick={()=>setState('quiz')}>เริ่มต้นทำแบบทดสอบ</button>
            </main>
            <footer>
                <small>create by mathhouse 2022</small>
            </footer>
        </div>
    )
}


export default Menu