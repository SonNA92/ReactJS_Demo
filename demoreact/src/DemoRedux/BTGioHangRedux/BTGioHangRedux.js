import React, { Component } from 'react'
import {connect} from 'react-redux'

class BTGioHangRedux extends Component {


    render() {
        return (
            <table className="table">
                <thead>
                        <tr>
                            <th>Ma sp</th>
                            <th>Hinh anh</th>
                            <th>Ten sp</th>
                            <th>So luong</th>
                            <th>Gia ban</th>
                            <th>Tong tien</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((spGioHang,index)=>{
                            return <tr key={index}>
                                <td>{spGioHang.maSP}</td>
                                <td><img src={spGioHang.hinhAnh} width={50} height={50} alt="..." /></td>
                                <td>{spGioHang.tenSP}</td>
                                <td><button onClick={()=>{
                                    this.props.tangGiamSoLuong(spGioHang.maSP,1)
                                }} className="btn btn-success mx-2">+</button>
                                    {spGioHang.soLuong}
                                    <button onClick={()=>{
                                        this.props.tangGiamSoLuong(spGioHang.maSP,-1)
                                    }} className="btn btn-success mx-2">-</button>
                                </td>
                                <td>{spGioHang.giaBan}</td>
                                <td>{spGioHang.soLuong*spGioHang.giaBan}</td>
                                <td><button onClick={()=>{
                                    this.props.xoaGioHang(spGioHang.maSP);
                                }} className="btn btn-danger">Xoa</button></td>
                            </tr>
                        })}
                    </tbody>
            </table>
        )
    }
}

// day la ham lay state tu Redux(rootReducer) bien thanh props cua component
const mapStateToProps = (rootReducer)=>{
    return {
        gioHang: rootReducer.stateGioHang
    }
}
// Xoa du lieu
const mapDispatchToProps =(dispatch) =>{

    return {
        xoaGioHang: (maSPClick)=>{
            // tao action dua gia tri len redux
            const action = {
                type: 'XOA_GIO_HANG',
                maSPClick:maSPClick
            }
            // dua action len store
            dispatch(action);
        },
        tangGiamSoLuong: (maSPClick,soLuong)=>{
            // tao ra 1 action
            const action = {
                type:'TANG_GIAM_SO_LUONG',
                soLuong:soLuong,
                maSPClick:maSPClick
            }
            dispatch(action);
        }
    }
}

// tao ra component moi co ket noi voi Store tu Component hien tai
export default connect(mapStateToProps,mapDispatchToProps)(BTGioHangRedux);

 