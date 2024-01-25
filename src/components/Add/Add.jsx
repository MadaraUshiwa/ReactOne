import './Add.css'
import React, { useContext } from 'react';

import { AppContext } from '../../context/appContext';

import { addOnPrices } from '../../constants/pricing';


function CardCheckbox({  slug, subtitle }) {

    const {user, setUser} = useContext(AppContext);
    
    const saveInfo = (key, value) => {
        setUser(prevState => ({ ...prevState, [key]: value }));
    };

    const updateAddOn = () => {
        const addOns = user.addOns ?? [];
        if (addOns.includes(slug)) {
            addOns.splice(addOns.indexOf(slug), 1);
        } else {
            addOns.push(slug);
        }

        saveInfo("addOns", addOns);
    }

    return (
        <div className='add-principale'>
            <div className="add-input">
                <input id='add-input' type="checkbox" checked={user.addOns?.includes(slug)} onChange={() => updateAddOn()} />
            </div>
            <div className='testx' >
                <h3 id='add-titre' >{addOnPrices[slug]["name"]}</h3>
                <p id='add-sub' >{subtitle}</p>
            </div>
            <div className='add-price'>
                <p>{ addOnPrices[slug]["price"]}</p>
            </div>
        </div>
    );
}

function Add(props) {
    return (
        <div className='card-test' >
            <div className='card-titre'>
                <h1>Pick add-ons</h1>
                <h5>Add-ons help enhance your gaming experience.</h5>
            </div>
            <div>
                <CardCheckbox  slug="onlineService" subtitle="Access to multiplayer games" price="+$10/yr" />
                <CardCheckbox  slug="largerStorage" subtitle="Extra 1TB of cloud save" price="+$20/yr" />
                <CardCheckbox  slug="customizable" subtitle="Custom theme on your profile" price="+$30/yr" />
            </div>
            <div className='card-button-change'>
                <button className='button-back' onClick={props.back}>Go Back</button>
                <button className='button-next' onClick={props.next}>Next Step</button>
            </div>
        </div>
    );
}

export default Add;