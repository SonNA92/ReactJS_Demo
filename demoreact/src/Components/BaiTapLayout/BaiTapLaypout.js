import React, { Component } from 'react'
import BTCarosel from './BTCarosel'
import BTHeader from './BTHeader'
import BTLAPtop from './BTLAPtop'
import BTProductList from './BTProductList'
import BTSmartphone from './BTSmartphone'
 export default class BaiTapLaypout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTCarosel/>
                <BTSmartphone/>
                <BTLAPtop/>
                <BTProductList/>
                
            </div>
        )
    }
}
