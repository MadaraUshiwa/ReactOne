import './SideBar.css'
import urlSidebar from '../../assets/sidebar.svg'
import React from 'react';

function SideBar(props) {
    const { step } = props;

    const getClassName = (stepNumber) => {
        return step === stepNumber ? 'listeActive' : 'liste-span';
    };

    return (
        <div className="sidebar">
            <img src={urlSidebar} alt="sidebar" id='sidebarBg' />
            <div className="sidebarContent">
                <div className="liste">
                    <span className={getClassName(1)}>1</span>
                    <div>
                        <h4>STEP 1</h4>
                        <h2>YOUR INFO</h2>
                    </div>
                </div>
                <div className="liste">
                    <span className={getClassName(2)}>2</span>
                    <div>
                        <h4>STEP 2</h4>
                        <h2>SELECT PLAN</h2>
                    </div>
                </div>
                <div className="liste">
                    <span className={getClassName(3)}>3</span>
                    <div>
                        <h4>STEP 3</h4>
                        <h2>ADD-ONS</h2>
                    </div>
                </div>
                <div className="liste">
                    <span className={getClassName(4)}>4</span>
                    <div>
                        <h4>STEP 4</h4>
                        <h2>SUMMARY</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
