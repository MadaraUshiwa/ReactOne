import './LastSubmit.css'


import urlty from "../../assets/thankyou.svg"

export default function Confirm(props) {
    return(
        <div className="submit">
            <img src={urlty} alt="thankyou"/>
            <h1 className='h1submit'>Thank you!</h1>
            <p className='psubmit'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}