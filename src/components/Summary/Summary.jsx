import './Summary.css'

import React from 'react';


function Summary(props) {
    return (
        <div className='summary-primo'>
            <div className='summary-titre'>
                <h1>Finishing up</h1>
                <h5>Double-check everything looks OK before confirming.</h5>
            </div>
            <div className='summary'>
                <div className='summary-plan'>
                    <div className='summary-plan-detail'>
                        <h3>Plan ICI</h3>
                        <span onClick={props.goToPlan} className='summary-button-change'>Change</span>
                    </div>
                    <div className='summary-price'>
                        <p>PRIX DU PLAN/ mensuel ou annuel </p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className='summary-add'>
                    <span> ADD ON CHOISI l'un en dessous de l'autre </span>
                    <span>le prix de l'add et si plusieurs le prix l'un au dessus de l'autre </span>
                </div>
            </div>


            <div className="summary-content">
                <div className='summary-total'>
                    <h3>Total</h3>              
                    <p>ici total du plan et des add on selectionné</p>
                </div>
            </div>


            <div className='summary-button-change'>
                <button className='button-back' onClick={props.back}>Go Back</button>
                <button className='button-next' onClick={props.confirm}>Confirm</button> 
            </div>
        </div>
    );
}

export default Summary; 




