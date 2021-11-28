// Hien thi (render) co dieu kien
import React, { Component } from 'react'

export default class StateDemo extends Component {

    // isLogin = false;
    userName = "abc";
    state = {
        // la thuoc tinh chua cac gia tri bi thay doi khi nguoi dung thao tac su kien
        isLogin: false
    }

    renderLogin = ()=>{
        if (this.state.isLogin === true){
            return <span>hello {this.userName}</span>;
        }

        return <button className="btn btn-outline-success" onClick={(event)=>{
            // Khi Click vao button se goi ham login
            this.login();
        }}>Dang Nhap</button>;
        
    }
    login =()=>{
        // this.state.isLogin = true; // ko su dung cach thay doi nay
        // su dung cach thay doi duoi day
        // let newState = {
        //     isLogin: true
        // }
        this.setState({
            isLogin: true
        },function(){
            // function nay se chay sau khi xu ly xong setState
            console.log(this.state);
        }); 
        // day la phuong co san cua React class component dung de thay doi gia tri cua thuoc tinh state dong thoi cho phep giao dien render lai
        // this.setState la 1 phuong thuc bat dong bo (cac code phia sau se chay luon ma khong cho ham nay chay xong)
    }



    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                            </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <span className="nav-item text-white">
                                {/* su dung dieu kien o day */}
                                {/* {this.isLogin === true ? <span>hello {this.userName}</span> : <button className="btn btn-outline-success">Dang Nhap</button> } */}
                                {this.renderLogin()}
                                    
                            </span>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
