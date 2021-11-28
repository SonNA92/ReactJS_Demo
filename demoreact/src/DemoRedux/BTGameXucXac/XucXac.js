import React, { Component } from 'react'
import {connect} from 'react-redux'
class XucXac extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btn btn-danger">
                            <div className="display-4 p-5" onClick={()=>{
                                // tao obj gui len reducer
                                const action = {
                                    type:'CHON_TAI_XIU',
                                    ketQuaChon:true
                                }
                                // su dung ham dispatch cua redux dua action len reducer
                                this.props.dispatch(action);
                            }}>TÀI</div>
                        </button>
                    </div>
                    <div className="col-4">
                        {/* <img src={this.props.mangXucXac[0].hinhAnh} style={{width:50, height:50}} alt="" />
                        <img src={this.props.mangXucXac[1].hinhAnh} style={{width:50, height:50}} alt="" />
                        <img src={this.props.mangXucXac[2].hinhAnh} style={{width:50, height:50}} alt="" /> */}
                        {this.props.mangXucXac.map((item,index)=>{
                            return <img key={index} src={item.hinhAnh} style={{width:50, height:50}} alt={item.diem} />
                        })}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-dark text-white">
                            <div className="display-4 p-5" onClick={()=>{
                                // tao obj gui len reducer
                                const action = {
                                    type:'CHON_TAI_XIU',
                                    ketQuaChon:false
                                }
                                // su dung ham dispatch cua redux dua action len reducer
                                this.props.dispatch(action);
                            }}>XỈU</div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac:rootReducer.baiTapGameXucXac.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac);