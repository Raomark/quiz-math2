import './App.css';
import { createContext, useState } from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Score from './components/Score';


export const DataContext = createContext();

function App() {
    const [state, setState] = useState('quiz')
    const [score, setScore] = useState(0)
    return (
        <DataContext.Provider value={{state, setState,score, setScore}}>
            <div className="App">
                {state === 'menu' && <Menu/>}
                {state === 'quiz' && <Quiz/>}
                {state === 'score' && <Score/>}
            </div>
        </DataContext.Provider>
    );
}

export default App;
