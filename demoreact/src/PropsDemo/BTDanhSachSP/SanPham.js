import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sanpham} = this.props;
        return (
            <div>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={sanpham.hinhAnh} style={{height:'300px',width:'100%'}} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanpham.tenSP}</h4>
                        <p className="card-text">VND {sanpham.giaBan.toLocaleString()}</p>
                        <button className="btn btn-success" onClick = {()=>{
                            this.props.xemChiTiet(sanpham)
                        }}>Chi tiet</button>
                        
                        <button className="btn btn-primary ml-2" onClick={()=>{
                            this.props.themGioHang(sanpham)
                        }}>Them gio hang</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
