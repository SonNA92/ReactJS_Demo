import React, { Component } from 'react'

// Tao 1 component hien thi 1 san pham
export default class BTProduct extends Component {

    
    render() {
        let {product} = this.props;
        return (
            <div className="">
                    <div className="card text-white bg-primary">
                        <img className="card-img-top" src={product.hinhAnh} alt />
                        <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">{product.gia}</p>
                        </div>
                    </div>
                </div>
        )
    }
}
