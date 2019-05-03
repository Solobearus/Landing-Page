import React from 'react'
import style from './Logos.module.css'
import FacebookLogo from '../../assets/facebook-logo-small.png'
import GoogleLogo from '../../assets/Google_2015_logo_small.png'
import NikeLogo from '../../assets/nike_small.png'
import TeslaLogo from '../../assets/Tesla-logo-small.png'
const Logos = (props) => {
    return (
        <div className={style.Logos}>
            <div className={style.Logo}>
                <img src={FacebookLogo} alt="couldn't find image" />
            </div>
            <div className={style.Logo}>
                <img src={GoogleLogo} alt="couldn't find image" />
            </div>
            <div className={style.Logo}>
                <img src={NikeLogo} alt="couldn't find image" />
            </div>
            <div className={style.Logo}>
                <img src={TeslaLogo} alt="couldn't find image" />
            </div>
        </div>
    )
}

export default Logos
