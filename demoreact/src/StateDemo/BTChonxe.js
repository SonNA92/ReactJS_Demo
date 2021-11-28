import React, { Component } from 'react'

export default class BTChonxe extends Component {

    state = {
        imgSrc: './img/car/products/black-car.jpg'
    }
    changeColor = (color) =>{
        this.setState({
            imgSrc: `./img/car/products/${color}-car.jpg`
        })
    }








    render() {
        return (
            <div className="container">
                <h1 className="text-center my-5">Bai tap chon xe (STATE)</h1>
                <div className="row">
                    <div className="col-4">
                    <img className="w-100" src={this.state.imgSrc} alt="123"/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-3">
                                <button className="bg-dark btn text-white" onClick={()=>{
                                    this.changeColor('black');
                                }}>Black color</button>
                            </div>
                            <div className="col-3">
                                <button className="bg-danger btn text-white" onClick={()=>{
                                    this.changeColor('red');
                                }}>Red color color</button>
                            </div>
                            <div className="col-3">
                                <button className="bg-secondary btn" onClick={()=>{
                                    this.setState({
                                        imgSrc:'./img/car/products/silver-car.jpg'
                                    })
                                }}>Silver color</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
