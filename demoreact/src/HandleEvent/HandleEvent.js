import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (name)=>{
        alert(`hello ${name}`);
    }

    handleClick2 = (event)=>{
        this.handleClick('abcd');
    }


    render() {
        return (
            <div className="container">
                {/* C1: su dung arow function khai bao xu ly su kien */}
                <h1>hello</h1>
                <button id="btn" className="btn btn-success" onClick={  (event) =>{
                    alert('cybersoft');
                    alert(event.target.className);
                    // event.target la chinh the xay ra su kien
                    this.handleClick('abc');
                }}>Click 1</button>

                {/* C2: su dung callback */}
                <button id="btn" className="btn btn-success" onClick={this.handleClick2}>Click 2</button>


            </div>

        )
    }
}


