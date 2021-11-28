import React, { Component } from 'react'
import TableSV from './TableSV'
import {connect} from "react-redux"

class FormQLSV extends Component {

    state = {
        value:{
            maSinhVien:'',
            tenSinhVien:'',
            soDienThoai:'',
            email:''
        },
        errors:{
            maSinhVien:'',
            tenSinhVien:'',
            soDienThoai:'',
            email:''
        }
       
    }

    handleChangeInput = (event)=>{
        // lay thong tin nguoi dung dua vao bien event
        let {value,name} = event.target;
        // lay ra gia tri this.state.value hien tai
        let newValue = {...this.state.value};
        // thay doi thuoc tinh trong this.state.value
        newValue[name] = value;

        // lay gia tri error hien tai
        let newError = {...this.state.errors};
        // xu ly thay doi erro
        let errorMessage = '';
        if (newValue[name].trim() === ''){
            errorMessage = name + 'khong duoc bo trong'
        }

        // lay thuoc tinh tu tao tren the
        let typeEmail = event.target.getAttribute('typeEmail');
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (typeEmail === 'email'){
            // neu truong thay doi email sai dinh dang
            if (!re.test(newValue[name])){
               errorMessage = name + 'khong dung dinh dang';
            }
        }
        newError[name] = errorMessage;


        // cap nhat lai state khi nguoi dung nhap lieu
        this.setState({
            value: newValue,
            errors: newError
        })
        console.log(this.state)


    }

    handleSubmit = (event)=>{
        event.preventDefault(); // chan su kien reload cua browser

        // kiem tra Submit
        // Form hop le khi tat ca input khong duoc de trong va hop le
        let {values,errors} = this.state;
        let valid = true;
        for (let keyName in values){
            if (values[keyName].trim() === ''){
                // value co truong bi de trong
                valid = false;
            }
        }
        for (let keyName in errors){
            if (errors[keyName] !== ''){
                // co 1 truong hien thi bi loi
                valid = false;
            }
        }
        if (!valid){
            alert(' Du lieu khong hop le');
            return
        }

        // Dua du lieu len Redux
        const action = {
            type: 'THEM_SINH_VIEN',
            sinhVien:this.state.value
        }
        this.props.dispatch(action)

    }

    componentWillReceiveProps(newProps){
        // this.prop laf truoc khi thay doi, newProps la sau khi thay doi
        // khi nguoi dung bam nut chinh sua dem props moi tu redux ve gan cho state
        this.setState({
            value:newProps.sinhVienSua
        })
    }

    render() {
        let {maSinhVien,tenSinhVien,soDienThoai,email} = this.state.value;
        return (
            <div className="container">
                <form onSubmit= {this.handleSubmit}>
                    <div className="card-header text-white bg-dark">Quan li sinh vien</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>ma Sv</p>
                                    <input className="form-control" name="maSinhVien" value={maSinhVien} onChange = {this.handleChangeInput} />
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>so DT</p>
                                    <input className="form-control" name="soDienThoai" value={soDienThoai} onChange = {this.handleChangeInput} />
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>ten Sv</p>
                                    <input className="form-control" name="tenSinhVien" value={tenSinhVien} onChange = {this.handleChangeInput} />
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>email</p>
                                    <input typeEmail = "email" className="form-control" name="email" value={email} onChange = {this.handleChangeInput}/>
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-right bg-primary">
                            <button type="submit" className="btn btn-success">Them SV</button>
                        </div>
                    </div>
                </form>
                <TableSV/>
            </div>
        )
    }
}

const mapStateToProps  = (rootReducer) => {
    return {
        sinhVienSua: rootReducer.quanLiSinhVienReducer.sinhVienSua
    }
}

export default connect(mapStateToProps)(FormQLSV)