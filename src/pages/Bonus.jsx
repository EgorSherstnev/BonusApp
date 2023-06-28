import React from "react";

import GsmSignal from '../assets/images/Group.svg';
import WiFIicon from '../assets/images/WIFI.svg';
import BluetoothIcon from '../assets/images/Vector 3.svg';
import BatteryIcon from '../assets/images/Battery.svg';
import InformationButton from '../assets/images/information-button 1.svg'
import FireBonus from '../assets/images/path_241 1.svg'
import BonusButton from '../assets/images/BonusButton.svg'

import { getToken } from "../http/bonusAPI";

const Bonus = () => {
    const click = async(e) => {
        e.preventDefault();
        try {
            let data = await getToken()
            console.log(data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }


    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__container container">
                    <div className="header__technical technical">
                        <div className="technical__left left">
                            <div className="left__info">
                                <img src={GsmSignal} alt="gsm signal" className="" />
                            </div>
                            <div className="left__mobile-operator">
                                <span className="mobile-operator">Figma</span>
                            </div>
                            <div className="left__wifi">
                                <img src={WiFIicon} alt="wifi signal" className="" />
                            </div>
                        </div>
                        <div className="technical__center timer">
                            <span className="timer">9:42 AM</span>
                        </div>
                        <div className="technical__right right">
                            <div className="right__bluetooth">
                                <img src={BluetoothIcon} alt="bluetooth" className="" />
                            </div>
                            <div className="right__battery-text">
                                <span className="battery-text">42%</span>
                            </div>
                            <div className="right__battery-icon">
                                <img src={BatteryIcon} alt="battery icon" className="" />
                            </div>
                        </div>
                    </div>
                    <div className="header__info info">
                        <div className="info__logo">
                            <span className="logo">ЛОГОТИП</span>
                        </div>
                        <div 
                            className="linfo__information-button"
                            onClick={click}
                        >
                            <img src={InformationButton} alt="information button" className="" />
                        </div>
                    </div>
                </div>
            </header>
            <main className="page">
                <div className="page__bonus-block bonus-block">
                    <div className="bonus-block__container">
                        <div className="bonus-block__info info">
                            <h1 className="info__title">300 бонусов</h1>
                            <div className="info__fire-bonus">
                                <div className="fire-bonus__date">29.03 сгорит</div>
                                <div className="fire-bonus__icon">
                                    <img src={FireBonus} alt="fire bonus" className="" />
                                </div>
                                <div className="fire-bonus__quantity">250 бонусов</div>
                            </div>
                        </div>
                        <div className="bonus-block__button">
                            <img src={BonusButton} alt="bonus button" className="" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Bonus;