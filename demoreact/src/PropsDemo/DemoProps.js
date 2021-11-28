import React, { Component } from 'react'
import Product from './Product'

export default class DemoProps extends Component {
    render() {

        let obj1 = {
            price:1000,
            id:1,
            title:'Iphone',
            img:'http://picsum.photos/200'
        }
        let obj2 = {
            price:2000,
            id:2,
            title:'Iphone 2',
            img:'http://picsum.photos/200'
        }
        let obj3 = {
            price:3000,
            id:3,
            title:'Iphone 3',
            img:'http://picsum.photos/200'
        }




        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Product title = "Iphone" price = "1000" product ={obj1}/>
                    </div>
                    <div className="col-4">
                        <Product title = "samsung" price="2000" product ={obj2}/>
                    </div>
                    <div className="col-4">
                        <Product title = "sony" price="3000" product ={obj3}/>
                    </div>
                </div>
            </div>
        )
    }
}
