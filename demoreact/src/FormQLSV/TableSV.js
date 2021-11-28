import React, { Component } from 'react'
import {connect} from 'react-redux'

class TableSV extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Ma SV</th>
                        <th>Ten SV</th>
                        <th>Email</th>
                        <th>So DT</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.mangSinhVien.map((sinhVien,index)=>{
                        return <tr key="index">
                            <td>{sinhVien.maSinhVien}</td>
                            <td>{sinhVien.tenSinhVien}</td>
                            <td>{sinhVien.email}</td>
                            <td>{sinhVien.soDienThoai}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{
                                    // gui du lieu len redux
                                    const action = {
                                        type: 'XOA_SINH_VIEN',
                                        maSinhVien:sinhVien.maSinhVien
                                    }
                                    this.props.dispatch(action)
                                }}>Xoa</button>
                                <button className="btn btn-primary" onClick={()=>{
                                    const action = {
                                        type:'SUA_SINH_VIEN',
                                        sinhVien:sinhVien
                                    }
                                    this.props.dispatch(action)
                                }}>Chinh sua</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangSinhVien: rootReducer.quanLiSinhVienReducer.mangSinhVien
    }
}


export default connect(mapStateToProps)(TableSV)
