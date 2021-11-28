import React, { Component } from 'react'
// c1: import duong dan file css: cach nay se anh huong toan bo file du an 
// import './StyleDemo.css';
// c2: import file css module: chi anh huong toi phan co import file
import style from './StyleDemo.module.css';


export default class StyleDemo extends Component {

    state = {
        fontSize: 15
    }


    render() {
        return (
            <div className="container">
                <p style = {{
                    backgroundColor:'black',
                    fontSize: this.state.fontSize
                }} className="text-red">hello</p>
                <p className={`${style.bgcolor} display-4`}>Cyber soft</p>
                {/* neu class co dau gach ngang thi viet duoi dang sau */}
                <p className={`${style['text-green']} display-4`}>Cyber soft</p> 

                <button onClick={()=>{
                    this.setState({
                        fontSize: this.state.fontSize + 1
                    })
                }}> + </button>

            </div>
        )
    }
}
