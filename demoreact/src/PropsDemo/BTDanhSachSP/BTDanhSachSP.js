import React, { Component } from 'react'
import GioHang from './GioHang'
import SanPham from './SanPham'

export default class BTDanhSachSP extends Component {

    arrProduct=[
            {
              "maSP": 1,
              "tenSP": "VinSmart Live",
              "manHinh": "AMOLED, 6.2\", Full HD+",
              "heDieuHanh": "Android 9.0 (Pie)",
              "cameraTruoc": "20 MP",
              "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
              "ram": "4 GB",
              "rom": "64 GB",
              "giaBan": 5700000,
              "hinhAnh": "./img/vsphone.jpg"
            },
          
            {
              "maSP": 2,
              "tenSP": "Meizu 16Xs",
              "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
              "heDieuHanh": "Android 9.0 (Pie); Flyme",
              "cameraTruoc": "20 MP",
              "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
              "ram": "4 GB",
              "rom": "64 GB",
              "giaBan": 7600000,
              "hinhAnh": "./img/meizuphone.jpg"
            },
          
            {
              "maSP": 3,
              "tenSP": "Iphone XS Max",
              "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
              "heDieuHanh": "iOS 12",
              "cameraSau": "Chính 12 MP & Phụ 12 MP",
              "cameraTruoc": "7 MP",
              "ram": "4 GB",
              "rom": "64 GB",
              "giaBan": 27000000,
              "hinhAnh": "./img/applephone.jpg"
            }
    ]  
    state = {
        sanPhamChiTiet:{
            "maSP": 3,
              "tenSP": "Iphone XS Max",
              "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
              "heDieuHanh": "iOS 12",
              "cameraSau": "Chính 12 MP & Phụ 12 MP",
              "cameraTruoc": "7 MP",
              "ram": "4 GB",
              "rom": "64 GB",
              "giaBan": 27000000,
              "hinhAnh": "./img/applephone.jpg"
        }, // gia tri mac dinh
        gioHang:[
            // {maSP:'1',tenSP:'Iphone',giaBan:1000,soLuong:2,hinhAnh:'http://picsum.photos/200'},
            // {maSP:'2',tenSP:'Iphone 2',giaBan:2000,soLuong:2,hinhAnh:'http://picsum.photos/300'}
        ]
    }

    renderSanPham = ()=>{
        return this.arrProduct.map((item,index)=>{
            return <div className="col-4" key={index}>
                {/* <div className="card text-white bg-primary">
                    <img className="card-img-top" src={item.hinhAnh} style={{height:'300px',width:'100%'}} alt />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <p className="card-text">VND {item.giaBan.toLocaleString()}</p>
                        <button className="btn btn-success" onClick = {()=>{
                            this.xemChiTiet(item);
                        }}>Chi tiet</button>
                    </div>
                </div> */}
                <SanPham sanpham={item} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang}/> 
                {/* truyen props va truyen ham cho ham con */}
            </div>

        })
    }
    xemChiTiet = (sanPhamClick)=>{
        this.setState({
            sanPhamChiTiet: sanPhamClick
            
        })
    }
    themGioHang = (sanPhamThem)=>{
        // them thuoc tinh soLuong cho gio hang khi click
        const gioHangMoi = {...sanPhamThem,soLuong:1}
        let gioHangCapNhat = this.state.gioHang;
        let index = gioHangCapNhat.findIndex(sp=>sp.maSP===sanPhamThem.maSP);
        if (index !== -1){
            // tim thay
            gioHangCapNhat[index].soLuong +=1;
        }else{
            // khong tim thay
            gioHangCapNhat.push(gioHangMoi);
        }
        this.setState({
            // them gio hang moi vao gio hang cu
            // gioHang: [...this.state.gioHang, gioHangMoi]
            // kiem tra san pham them da co trong gio hang chua
            gioHang:gioHangCapNhat

        })
    }
    xoaSanPham = (maSPXoa) =>{
        let gioHangCapNhat = this.state.gioHang;
        // tim san pham can xoa
        let index = gioHangCapNhat.findIndex(spGH=>spGH.maSP===maSPXoa);
        if (index !== -1){
            gioHangCapNhat.splice(index,1)
        }
        // set lai state gio hang
        this.setState({
            gioHang:gioHangCapNhat
        })
    }
    // Xu ly tang giam so luong
    tangGiamSoLuong = (maSP,soLuong)=>{
        let gioHangCapNhat = this.state.gioHang;
        // tim san pham bam nut +/-
        let index = gioHangCapNhat.findIndex(spGH=>spGH.maSP===maSP);
        if (index !== -1){
            gioHangCapNhat[index].soLuong += soLuong;
            if (gioHangCapNhat[index].soLuong<1){
                // tra ve gia tri cu
                gioHangCapNhat[index].soLuong -= soLuong;
            }
        }

        this.setState({
            gioHang:gioHangCapNhat
        })
    }

    render() {
        let {maSP,tenSP,heDieuHanh,hinhAnh,ram,rom,giaBan,manHinh,cameraSau,cameraTruoc} = this.state.sanPhamChiTiet;
        return (
            <div className="container">
                <GioHang gioHang={this.state.gioHang} xoaSanPham={this.xoaSanPham} tangGiamSoLuong = {this.tangGiamSoLuong}/>
                <h3 className="text-center my-4">Danh sach san pham</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row  mt-5">
                    <div className="col-4">
                        <h3 className="text-center">{tenSP}</h3>
                        <img src={hinhAnh} alt="" className="w-100" />
                    </div>
                    <div className="col-8">
                        <h3 className="text-center">Thong tin san pham</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ten sp</th>
                                    <th>{tenSP}</th>
                                </tr>
                                <tr>
                                    <th>man hinh</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>HDH</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera truoc</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{ram}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
