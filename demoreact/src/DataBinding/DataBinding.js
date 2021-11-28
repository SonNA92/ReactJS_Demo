import React, { Component } from 'react'

export default class DataBinding extends Component {
    // Ngoai phuong thuc la cac thuoc tinh va phuong thuc khac
    sinhVien = {
        maSV: 'abc123',
        ten: 'abcdf'
    }
    // Binding phuong thuc ket qua tra ve la 1 component hoac chuoi hoac so hoac noi dung html
    renderProduct = ()=>{
        const product = {
            id: 1,
            name:'Iphone',
        }
        return <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.id}</h4>
                        <p className="card-text">{product.name}</p>
                    </div>
                </div>

        
    }



    render() {
        // Khai bao bien trong phuong thuc
        const title = "cybersoft";

        return (
            <div>
                <div>
                    <h1>DataBinding</h1>
                    <p id="title">{title}</p>
                </div>
                <br/>
                <div class="card text-left">
                    <img class="card-img-top" src="holder.js/100px180/" alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">Ma sv: {this.sinhVien.maSV}</h4>
                        <p class="card-text">Ho ten: {this.sinhVien.ten}</p>
                    </div>
                </div>
                <div>{this.renderProduct()}</div>
            </div>
        )
    }
}
