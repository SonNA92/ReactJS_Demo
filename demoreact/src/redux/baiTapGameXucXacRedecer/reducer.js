const stateDefaultGame = {
    ketQuaChon:false, // false la xiu, true la tai
    soBanThang:1,
    soBanChoi:5,
    mangXucXac:[
      {hinhAnh:'./img/imgGame/1.png',diem:1},
      {hinhAnh:'./img/imgGame/2.png',diem:2},
      {hinhAnh:'./img/imgGame/3.png',diem:3}
    ]
  
}

export const baiTapGameXucXacReducer = (state = stateDefaultGame,action)=>{

    switch (action.type){
      case 'CHON_TAI_XIU':{
        state.ketQuaChon = action.ketQuaChon;
        // do tinh chat bat bien cua redux doi voi obj va arr => phai chep ra obj hoac arr moi thi giao dien moi render lai
        return {...state};
      }
      case 'PLAY_GAME':{
        let mangXXNN = [];
        // random 3 lan de tao ra 3 con xuc xac
        for (var i=1;i<=3;i++){
          // tao 1 con so ngau nhien
          let soNN = Math.floor(Math.random() * 6) + 1;
          // tu so ngau nhien tao thanh 1 obj xuc xac ket qua
          let xxnn = {hinhAnh:`./img/imgGame/${soNN}.png`,diem:soNN}
          mangXXNN.push(xxnn);
        }
        // cap nhat lai state
        state.mangXucXac = mangXXNN;
        // tinh diem xuc xac
        var tongDiem = mangXXNN.reduce((diem,xxnn,index)=>{
          return diem += xxnn.diem; 
        },0);  

        // so sanh va xu li ket qua
        if ((tongDiem > 11 && state.ketQuaChon === true) || (tongDiem < 11) && state.ketQuaChon === false ){
          state.soBanThang += 1;
        }

        // xu li tang ban choi
        state.soBanChoi += 1;
        return {...state};

      }

    }
    return state;
}