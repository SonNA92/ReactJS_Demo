import React, { Component } from 'react'
import {connect} from 'react-redux'
class KetQua extends Component {
    render() {
        return (
            <div className="text-center container">
                <div className="display-4">
                    <div>Bạn chọn: 
                        <span className="text-danger">{this.props.ketQuaChon ? 'Tai' : 'Xiu'}</span>
                    </div>
                </div>
                <div className="display-4">
                    <div>Số bàn thắng: 
                        <span className="text-danger">{this.props.soBanThang}</span>
                    </div>
                </div>
                <div className="display-4">
                    <div>Số bàn chơi: 
                        <span className="text-danger">{this.props.soBanChoi}</span>
                    </div>
                </div>
                <div className="display-4">
                    <button className="btn btn-success"> 
                        <span className="display-4 p-1" onClick={()=>{
                            const action = {
                                type:'PLAY_GAME'
                            }

                            this.props.dispatch(action)
                        }

                        }>Play Game</span>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer)=>{
    return {
        soBanThang:rootReducer.baiTapGameXucXac.soBanThang,
        soBanChoi:rootReducer.baiTapGameXucXac.soBanChoi,
        ketQuaChon:rootReducer.baiTapGameXucXac.ketQuaChon
    }
}

export default connect(mapStateToProps)(KetQua);