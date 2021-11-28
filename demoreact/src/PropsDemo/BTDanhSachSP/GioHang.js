import React, { Component } from 'react'

export default class GioHang extends Component {

    tinhTongSoLuong = ()=>{
        let tongSL = 0;
        for (let spGH of this.props.gioHang){
            tongSL += spGH.soLuong;
        }
        return tongSL;
    }



    renderGioHang = ()=>{
        return this.props.gioHang.map((item,index)=>{
            return <tr key={index}>
                        <td>{item.maSP}</td>
                        <td><img src={item.hinhAnh} alt="..." width={50} height={50} /></td>
                        <td>{item.tenSP}</td>
                        <td>
                            <button className="btn btn-success mr-2" onClick={()=>{
                                this.props.tangGiamSoLuong(item.maSP,1)
                            }}>+</button>
                                {item.soLuong}
                            <button className="btn btn-success ml-2" onClick={()=>{
                                this.props.tangGiamSoLuong(item.maSP,-1)
                            }} >-</button>
                        </td>
                        <td>{item.giaBan.toLocaleString()}</td>
                        <td>{(item.giaBan*item.soLuong).toLocaleString()}</td>
                        <td className="btn btn-danger" onClick={()=>{
                            this.props.xoaSanPham(item.maSP)
                        }}>Xoa</td>
                    </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <h3>gio hang</h3>
                <div className="text-right">
                    <i class="fa fa-cart-plus"></i> ({this.tinhTongSoLuong()})
                </div>
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
                        {this.renderGioHang()}
                        {/* <tr>
                            <td>1</td>
                            <td><img src="./img/applephone.jpg" alt="..." width={50} height={50} /></td>
                            <td>Iphone</td>
                            <td>
                                <button className="btn btn-success mr-2">+</button>
                                    2
                                <button className="btn btn-success ml-2" >-</button>
                            </td>
                            <td>1000</td>
                            <td>2000</td>
                            <td className="btn btn-danger">Xoa</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
    }
}
