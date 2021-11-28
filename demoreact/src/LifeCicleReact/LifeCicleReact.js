import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCicleReact extends Component {


    constructor(props){
        super(props);
        console.log('constructor');

        this.state = {
            obj:{
                like:1
            },
            like: 1
        }
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps');
        return null;
    }

    // shouldComponentUpdate(newProps,newState){
    //     // if...else nhu the nao de ham render sau nay chay hoac ko chay. Neu la true thi chay, false thi khong
    //     return true;
    // }


    render() {
        console.log('render');
        return (
            <div className="container">
                <h1>{this.state.like} like</h1>
                <button className="btn btn-success" onClick={()=>{
                    // doi voi thuoc tinh la object hoac mang thi khi muon PureComponent nhan dien state thay doi ta phai sao chep gia tri sang 1 object hoac mang khac
                    let object = {...this.state.obj};
                    object.like += 1;

                    this.setState({
                        like: this.state.like + 1,
                        obj: object
                    })
                }}> Like </button>
                hello

                <ChildComponent object = {this.state.obj}/>
                {/* {this.state.like > 5 ? '' : <ChildComponent/> } */}
            </div>
        )
    }

    componentDidMount(){
        // thuong dung de call API tu Backend
        // chi chay 1 lan o Mounting va tu lan 2 tro di chay ham update duoi
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}



    
