import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add />}></Route>
          <Route path='/View' element={<View />}></Route>
          <Route path='/Edit/:id' element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



