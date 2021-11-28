import React, { Component } from 'react'
import axios from 'axios'

export default class API extends Component {

    state = {
        mangPhim:[]
    }
    async componentDidMount(){
        // goi API lay du lieu  load vao state.mangPhim
        try {
            var result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=gp01',
                method: 'get'
            });
            this.setState({
                mangPhim:result.data
            });
        } catch (errors){
            console.log('errors',errors.response.data);
        }
        
        // // xu li thanh cong
        // promise.then(result => {
        //     this.setState({mangPhim:result.data})
        //     console.log('result',result.data);
        // })
        // // xu li that bai
        // promise.catch(errors => {
        //     console.log('errors',errors.response.data)
        // })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center display-4">Danh sach film </h3>
                <div className="row">
                    {this.state.mangPhim.map((phim,index)=>{
                        return <div className="col-4" key={index}>
                        <div className="card text-white bg-primary">
                            <img className="card-img-top" src={phim.hinhAnh} alt />
                            <div className="card-body">
                                <h4 className="card-title">{phim.tenPhim}</h4>
                                <p className="card-text">{phim.moTa}</p>
                            </div>
                        </div>
                    </div>
                    })}
                    
                    {/* <div className="col-4">
                        <div className="card text-white bg-primary">
                            <img className="card-img-top" src="https://picsum.photos/300" alt />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-white bg-primary">
                            <img className="card-img-top" src="https://picsum.photos/400" alt />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
