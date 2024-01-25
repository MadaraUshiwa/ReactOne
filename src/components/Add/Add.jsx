import './Add.css'
import React, { useState } from 'react';


function CardCheckbox({ title, subtitle, price }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='add-principale'>
            <div className="add-input">
                <input id='add-input' type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            </div>
            <div className='testx' >
                <h3 id='add-titre' >{title}</h3>
                <p id='add-sub' >{subtitle}</p>
            </div>
            <div className='add-price'>
                <p>{price}</p>
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
                <CardCheckbox title="Online service" subtitle="Access to multiplayer games" price="+$10/yr" />
                <CardCheckbox title="Larger storage" subtitle="Extra 1TB of cloud save" price="+$20/yr" />
                <CardCheckbox title="Customizable Profile" subtitle="Custom theme on your profile" price="+$30/yr" />
            </div>
            <div className='card-button-change'>
                <button className='button-back' onClick={props.back}>Go Back</button>
                <button className='button-next' onClick={props.next}>Next Step</button>
            </div>
        </div>
    );
}

export default Add;

