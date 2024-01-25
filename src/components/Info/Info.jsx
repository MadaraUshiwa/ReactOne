import './Info.css'
import React, { useState } from 'react';


function Info(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div className='info-container'>
            <div className='titre-info'>
                <h1>Personal info</h1>
                <h2>Please provide your name, email adress, and phone number</h2>
            </div>
            <label>
                Your name: {name}
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Your email is: {email}
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Your phone number is: {phone}
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
            </label>
            <div style={{width : '100%'}}>
                <button onClick={props.next}>Next Step</button>
            </div>
        </div>
    );
}

export default Info;