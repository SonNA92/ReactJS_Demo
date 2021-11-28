import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import style from '../../asset/component/BTGameXucXac.module.css'

export default class BTGameXucXac extends Component {
    render() {
        return (
            <div className={`${style.bgGame}`}>
                <h3 className="text-center pt-5 display-4">BAI TAP GAME XUC XAC</h3>
                <XucXac/>
                <KetQua/>
            </div>
        )
    }
}

