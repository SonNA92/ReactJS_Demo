import React, { Component, PureComponent} from 'react'

export default class ChildComponent extends PureComponent {
// PureComponent se nhan dang this.props cua component nay neu khong co gi thay doi thi se khong kich hoat ham render

    constructor(props){
        super(props);
        console.log('constructor child');
        this.timeout = {}
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps child');
        return null;
    }

    render() {
        console.log('render child');
        return (
            <div>
                <div className="bg-dark text-white">
                    <p className="p-2">hello child component</p>
                    {this.props.object.like}
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        // ham van chay ngam mac du ko hien thi component
        console.log('componentDidMount child');
        // this.timeout = setInterval(()=>{
        //     console.log('hello')
        // },1000);
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate child');
    }

    componentWillUnmount(){
        // dung de clear cac ham, cac gia tri chay ngam cua ung dung. Ham chay truoc khi component mat khoi giao dien
        clearInterval(this.timeout);
        console.log('componentWillUnmount child');
    }
}



