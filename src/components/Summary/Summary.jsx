import './Summary.css'

import React from 'react';

import { AppContext } from '../../context/appContext';

import { prices, addOnPrices } from '../../constants/pricing';


function Summary(props) {
    const {user} = React.useContext(AppContext);

    
    const getPrice = () => {
        return prices[user.plan != null ? user.plan.toLowerCase() : "arcade"][user.isMonthly ? 0 : 1];
    };

    const getTotal = () => {
        let total = getPrice();
        user.addOns?.forEach(addOn => {
            total += addOnPrices[addOn]["price"];
        });

        return total;
    }

    
    return (
        <div className='summary-primo'>
            <div className='summary-titre'>
                <h1 className='summary-text'>Finishing up</h1>
                <h5 className='summary-text'>Double-check everything looks OK before confirming.</h5>
            </div>
            <div className='summary'>
                <div className='summary-plan'>
                    <div className='summary-plan-detail'>
                        <h3 className='summary-price-color-total' >{user.plan ?? "Arcade"}</h3>
                        <span onClick={props.goToPlan} className='summary-button-change'>Change</span>
                    </div>
                    <div className='summary-price'>
                        <p className='summary-price-color'>{`+$${getPrice()}/${user.isMonthly ? "mo" : "yr"}`} </p>
                    </div>
                </div>
                <div className="hr"></div>
                {user.addOns?.map((addOn, _) => (
                <div key={addOn} className='summary-add'>
                    <span className='summary-text'> {addOnPrices[addOn]["name"]} </span>
                    <span className='summary-price-color' >{`+$${addOnPrices[addOn]["price"]}/${user.isMonthly ? "mo" : "yr"}`} </span>
                </div>
                    ))}
                    
            </div>


            <div className="summary-content">
                <div className='summary-total'>
                    <h3 className='summary-text'>Total</h3>              
                    <p className='summary-price-color-total' >{`+$${getTotal()}/${user.isMonthly ? "mo" : "yr"}`} </p>
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