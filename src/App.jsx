import './App.css';
import React, { useState } from 'react';
import SideBar from './components/SideBar/SideBar'; 
import Info from './components/Info/Info'; 
import Plan from './components/Plan/Plan'; 
import Add from './components/Add/Add'; 
import Summary from './components/Summary/Summary'; 
import Confirm from './components/LastSubmit/LastSubmit';
import { AppContext } from './context/appContext';

const Context = AppContext;

function App() {
    const [step, setStep] = useState(1)
    const [user, setUser] = useState({});

    const goToPlan = () => {
        setStep(2);
    };

    return (
        <Context.Provider value={{user, setUser}}>
            <div className='App'>
                <SideBar step={step} />
                <div className="rightSide">
                    {step === 1 ? (<Info next={() => setStep(step + 1)} />) : step === 2 ? (<Plan back={() => setStep(step - 1)} next={() => setStep(step + 1)} />) : step === 3 ? (<Add back={() => setStep(step - 1)} next={() => setStep(step + 1)} />) : step === 4 ? (<Summary back={() => setStep(step - 1)} confirm={() => setStep( step + 1)} goToPlan={goToPlan} />) : (<Confirm />)}
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;