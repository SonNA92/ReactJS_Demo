import { combineReducers, createStore } from "redux";
import {baiTapGameXucXacReducer} from './baiTapGameXucXacRedecer/reducer'
import { quanLiSinhVienReducer } from "./QLSVreducer";
const stateDefault = [
  {
    maSP: "1",
    tenSP: "Iphone",
    giaBan: 1000,
    soLuong: 2,
    hinhAnh: "http://picsum.photos/200",
  },
  {
    maSP: "2",
    tenSP: "Iphone 2",
    giaBan: 2000,
    soLuong: 2,
    hinhAnh: "http://picsum.photos/300",
  },
];
// const stateDefaultGame = {
//   ketQuaChon:false, // false la xiu, true la tai
//   soBanThang:1,
//   soBanChoi:5,
//   mangXucXac:[
//     {hinhAnh:'./img/imgGame/1.png',diem:1},
//     {hinhAnh:'./img/imgGame/2.png',diem:2},
//     {hinhAnh:'./img/imgGame/3.png',diem:3}
//   ]

// }

const rootReducer = combineReducers({
  // Noi chua toan bo state cua ung dung
  stateGioHang: (state = stateDefault, action) => {
    console.log(action);
    switch (action.type) {
      case "THEM_GIO_HANG": {
        const gioHangUpdate = [...state];
        // kiem tra sp co trong gio hang hay chua
        const index = gioHangUpdate.findIndex(
          (spGH) => spGH.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangUpdate[index].soLuong += 1;
        } else {
          gioHangUpdate.push(action.spGioHang);
        }
        return gioHangUpdate;
      }
      case "XOA_GIO_HANG": {
        let gioHangUpdate = [...state];
        // loc ra nhung san pham khong co cung ma sp bi xoa
        gioHangUpdate = gioHangUpdate.filter(
          (spGH) => spGH.maSP === action.maSPClick
        );
        // return ve state moi
        return gioHangUpdate;
      }
      case "TANG_GIAM_SO_LUONG": {
        let gioHangUpdate = [...state];
        let index = gioHangUpdate.findIndex(
          (spGH) => spGH.maSP == action.maSPClick
        );


         console.log(index)
        if (index !== -1) {
          gioHangUpdate[index].soLuong += action.soLuong;
          if (gioHangUpdate[index].soLuong < 1) {
            gioHangUpdate[index].soLuong = 1;
          }
        }
        return gioHangUpdate;
      }
    }
    return state;
  },
  baiTapGameXucXac:baiTapGameXucXacReducer,
  quanLiSinhVienReducer
  

});


export const store = createStore(rootReducer);
