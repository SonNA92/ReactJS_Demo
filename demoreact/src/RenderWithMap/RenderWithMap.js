import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        {id:1,name:'Iphone',price:1000},
        {id:2,name:'Iphone 5',price:2000},
        {id:3,name:'Iphone 6',price:3000},
    ]

    renderProduct = ()=>{
        // // cach 1:
        // const arrTag = [];
        // for (let i=0;i<this.arrProduct.length;i++){
        //     let product = this.arrProduct[i];
        //     let tagJS = <div className="card text-left bg-primary col-4">
        //                     <img className="card-img-top" src="holder.js/100px180/" alt />
        //                     <div className="card-body">
        //                         <h4 className="card-title">{product.name}</h4>
        //                         <p className="card-text">{product.price}</p>
        //                     </div>
        //                 </div>
        //     // dua tagJS vao mang
        //     arrTag.push(tagJS);
        // }
        // return arrTag;
        // cach 2:
        const result = this.arrProduct.map((product,index)=>{
            return <div className="card text-left bg-primary col-4" key={index}>
                        <img className="card-img-top" src="holder.js/100px180/" alt />
                        <div className="card-body">
                            <h4 className="card-title">{product.name}</h4>
                            <p className="card-text">{product.price}</p>
                        </div>
                    </div>
        });
        return result;
    }





    render() {
        return (
            <div className="container">
                <div className="text-center">Danh sach san pham</div>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
