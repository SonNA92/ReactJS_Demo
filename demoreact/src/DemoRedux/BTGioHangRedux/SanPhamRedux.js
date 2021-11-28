import React, { Component } from 'react'
// ket noi Component voi Redux
import {connect} from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        const {sanPham} = this.props;
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" height={300} src={sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                        <button onClick={()=>{
                            this.props.themGioHang(sanPham)
                        }} className="btn btn-success">Them gio hang</button>
                    </div>
                </div>

            </div>
        )
    }
}
// Ham sinh ra props la ham xu ly de dua du lieu len redux
const mapDispatchToProps = (dispatch)=>{
    // dispatch giong ham setState dua du lieu len Redux
    return {
        themGioHang: (spClick)=>{
            // action la 1 obj chua du lieu gui len redux Store
            const action = {
                type: 'THEM_GIO_HANG', // thuoc tinh bat buoc phai co
                spGioHang:{...spClick,soLuong:1}
            }
            // su dung ham dispatch de gui du lieu len redux
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(SanPhamRedux);
