import React, { Component } from 'react'
import Product from '../../PropsDemo/Product'
import BTProduct from './BTProduct'

// Hien thi 1 danh sach cac san pham tu the hien cua 1 san pham
export default class BTProductList extends Component {

    arrProduct=[
        { maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X',hinhAnh:'./img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7',hinhAnh:'./img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850',hinhAnh:'./img/sp_vivo850.png', gia: 3000 }  
    ]
    renderProduct = ()=>{
        return this.arrProduct.map((item,index)=>{
                return <div className="col-3">
                    <BTProduct product = {item}/>
                </div>

        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
            
        )
    }
}
