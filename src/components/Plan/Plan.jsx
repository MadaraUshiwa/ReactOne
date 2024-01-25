import { useContext } from 'react';

import './Plan.css'

import React, { useState } from 'react';

import Pro from '../../assets/pro.svg'
import Adv from '../../assets/advenced.svg'
import Arcade from '../../assets/arcade.svg'

import { AppContext } from '../../context/appContext';
import { prices } from '../../constants/pricing';

function CardComponent({ title, price, imageUrl, onClick, isSelected, pricing }) {
    const [isHovered, setIsHovered] = useState(false);

    

    return (
        <div 
            onClick={onClick} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                border: isHovered ? '2px solid purple' : 'none',
                backgroundColor: isSelected ? 'grey' : 'white'
            }}
        >
            <img src={imageUrl} alt="image" /> 
            <h2>{title}</h2>
            <p>${price}{pricing ? "/mo" : "/yr"}</p>
        </div>
    );
}

function MainComponent(props) {

    const {user, setUser} = useContext(AppContext);
    
    const saveInfo = (key, value) => {
        setUser(prevState => ({ ...prevState, [key]: value }));
    };

   

    return (
        <div className='plan-test' >
            <div className='card-titre'>
                <h1>Select your plan</h1>
                <h5>You have the option of monthly or yearly billing</h5>
            </div>

            <div className='card-plan'>
                <CardComponent title="Arcade" price={user.isMonthly ? prices.arcade[0] : prices.arcade[1]} imageUrl={Arcade} onClick={() => saveInfo("plan",'Arcade')} isSelected={user.plan === 'Arcade'} pricing={user.isMonthly} />
                <CardComponent title="Advanced" price={user.isMonthly ? prices.advanced[0] : prices.advanced[1]} imageUrl={Adv} onClick={() => saveInfo("plan", 'Advanced')} isSelected={user.plan === 'Advanced'} pricing={user.isMonthly} />
                <CardComponent title="Pro" price={user.isMonthly ? prices.pro[0] : prices.pro[1]} imageUrl={Pro} onClick={() => saveInfo("plan",'Pro')} isSelected={user.plan === 'Pro'} pricing={user.isMonthly} />
            </div>
            <div className='card-period'>
                <span className={user.isMonthly ? 'text-active' : 'text-inactive'}>Monthly</span>
                <div className='card-button'>
                    <label className="switch">
                        <input onClick={() => saveInfo("isMonthly", !user.isMonthly)} type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
                <span className={!user.isMonthly ? 'text-active' : 'text-inactive'}>Yearly</span>
            </div>
            <div className='card-button-change'>
                <button className='button-back' onClick={props.back}>Go Back</button>
                <button className='button-next' onClick={props.next}>Next Step</button>
            </div>
        </div>
    );
}

export default MainComponent;