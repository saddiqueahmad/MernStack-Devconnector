import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

//Redux
import { Provider } from 'react-redux';
import store from './store';


const App = () => 
(

  <Provider store={store}>   
     
 <Router>
 
 <>
 
 <Navbar />

<section className="container">
     <Routes>
      <Route  path='/' element={<Landing />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} /> 

     </Routes> 
</section>
</>
</Router>
</Provider>


);

export default App;