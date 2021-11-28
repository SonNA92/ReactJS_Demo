

const stateDefaul = {
    mangSinhVien: [
        {maSinhVien:'1',tenSinhVien:'ng van a',soDienThoai:'0123456',email:'abc@gmail.com'},
        {maSinhVien:'2',tenSinhVien:'ng van b',soDienThoai:'012345678',email:'abcd@gmail.com'}
    ],
    sinhVienSua:{
        maSinhVien:'',
        tenSinhVien:'',
        soDienThoai:'',
        email:''
    }

}

export const quanLiSinhVienReducer = (state = stateDefaul,action) => {
    switch (action.type){
        case 'THEM_SINH_VIEN':{
            let mangSVcapNhat = [...state.mangSinhVien];
            mangSVcapNhat.push(action.sinhVien);

            // cap nhat lai state
            state.mangSinhVien = mangSVcapNhat;
            return {...state};
        }
        case 'XOA_SINH_VIEN':{
            let mangSVCapNhat = [...state.mangSinhVien];
            mangSVCapNhat = mangSVCapNhat.filter(sv=>sv.maSinhVien !== action.maSinhVien)

            // cap nhat lai state
            state.mangSinhVien = mangSVCapNhat;
            return {...state}
        }
        case 'SUA_SINH_VIEN':{
            state.sinhVienSua = action.sinhVien;
            return {...state}
        }

        default: {return state}
    }
}