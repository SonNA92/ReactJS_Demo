import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        //this.props: thuoc tinh co san cua react component giup chung ta nhan gia tri tu component cha truyen vao
        // boc tachs thuoc tinh
        // let {title,price} = this.props;
        let {product} = this.props;
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top w-100" src={product.img} alt />
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.price}</p>
                </div>
            </div>

        )
    }
}
