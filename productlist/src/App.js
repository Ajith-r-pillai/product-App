
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Productview from './Components/Productview';
import Addproduct from './Components/Addproduct';
import Addcategory from './Components/Addcategory';
import Addsubcategory from './Components/Addsubcategory';

function App() {
  return (
    <div className="App">
   <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='view/:id' element={<Productview/>}></Route>
        <Route path='addproduct/:id' element={<Addproduct/>}></Route>
        <Route path='addc' element={<Addcategory/>}></Route>
        <Route path='addsubcategory/:id' element={<Addsubcategory/>}></Route>
   
        


   
      </Routes>
    </div>
  );
}

export default App;
