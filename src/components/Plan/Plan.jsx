import './Plan.css'

import React, { useState } from 'react';
import Info from '../Info/Info'; 
import Add from '../Add/Add'; 

import Pro from '../../assets/pro.svg'
import Adv from '../../assets/advenced.svg'
import Arcade from '../../assets/arcade.svg'

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
    const [isMonthly, setIsMonthly] = useState(true);
    const [component, setComponent] = useState('main');
    const [selectedCard, setSelectedCard] = useState(null);

    const prices = {
        monthly: [10, 20, 30],
        annual: [100, 200, 300]
    };

    if (component === 'info') {
        return <Info />;
    } else if (component === 'Add') {
        return <Add />;
    } else {
        return (
            <div className='plan-test' >
                <div className='card-titre'>
                    <h1>Select your plan</h1>
                    <h5>You have the option of monthly or yearly billing</h5>
                </div>

                <div className='card-plan'>
                    <CardComponent title="Arcade" price={isMonthly ? prices.monthly[0] : prices.annual[0]} imageUrl={Arcade} onClick={() => setSelectedCard('Arcade')} isSelected={selectedCard === 'Arcade'} pricing={isMonthly} />
                    <CardComponent title="Advanced" price={isMonthly ? prices.monthly[1] : prices.annual[1]} imageUrl={Adv} onClick={() => setSelectedCard('Advanced')} isSelected={selectedCard === 'Advanced'} pricing={isMonthly} />
                    <CardComponent title="Pro" price={isMonthly ? prices.monthly[2] : prices.annual[2]} imageUrl={Pro} onClick={() => setSelectedCard('Pro')} isSelected={selectedCard === 'Pro'} pricing={isMonthly} />
                </div>
                <div className='card-period'>
                    <span className={isMonthly ? 'text-active' : 'text-inactive'}>Monthly</span>
                    <div className='card-button'>
                        <label className="switch">
                            <input onClick={() => setIsMonthly(!isMonthly)} type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <span className={!isMonthly ? 'text-active' : 'text-inactive'}>Yearly</span>
                </div>
                <div className='card-button-change'>
                    <button className='button-back' onClick={props.back}>Go Back</button>
                    <button className='button-next' onClick={props.next}>Next Step</button>
                </div>
            </div>
        );
    }
}

export default MainComponent;



