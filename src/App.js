import './App.css';
import { Routes, Route, } from "react-router-dom";
import {Home,Tasks,Importent, Myday, Planned} from './pages/index'
import Search from './pages/Search/Search';
function App() {
  return (
    <div className="relative">
      <Routes>
        <Route exact path='/' element={<Home/>}>
          <Route index  element={<Tasks/>}/>
          <Route  path='/impor' element={<Importent/>}/>
          <Route path='/myDay' element={<Myday/>}/>
          <Route path='/planned' element={<Planned/>}/>
          <Route path='/search' element={<Search/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
