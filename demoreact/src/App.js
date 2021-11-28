import logo from './logo.svg';
import './App.css';
import HeaderStateless from './Components/HeaderStateless';
import HeaderStateFull from './Components/HeaderStateFull';
import BaiTapLaypout from './Components/BaiTapLayout/BaiTapLaypout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import BTChonxe from './StateDemo/BTChonxe';
import StyleDemo from './StyleDemo/StyleDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BTQuanLyPhim from './RenderWithMap/BTQuanLyPhim';
import DemoProps from './PropsDemo/DemoProps';
import BTDanhSachSP from './PropsDemo/BTDanhSachSP/BTDanhSachSP';
import DanhSachSPRedux from './DemoRedux/BTGioHangRedux/DanhSachSPRedux';
import BTGameXucXac from './DemoRedux/BTGameXucXac/BTGameXucXac';
import FormQLSV from './FormQLSV/FormQLSV';
import LifeCicleReact from './LifeCicleReact/LifeCicleReact';
import API from './API/API';

function App() {
  return (
    <div className="App">
       {/* them the duoc tao vao hien thi len UI */}
        {/* <BaiTapLaypout /> */}
        {/* <DataBinding/> */}
        {/* <HandleEvent/> */}
        {/* <StateDemo/> */}
        {/* <BTChonxe/> */}
        {/* <StyleDemo/> */}
        {/* <RenderWithMap/> */}
        {/* <BTQuanLyPhim/> */}
        {/* <DemoProps/> */}
        {/* <BTDanhSachSP/> */}
        {/* <DanhSachSPRedux/> */}
        {/* <BTGameXucXac/> */}
        {/* <FormQLSV/> */}
        <LifeCicleReact/>
        {/* <API/> */}
          
    </div>
  );
}

export default App;
