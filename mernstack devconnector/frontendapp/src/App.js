import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import { loadUser } from './action/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';


if(localStorage.token){
     setAuthToken(localStorage.token);
 }

const App = () => {


useEffect (() => {
  store.dispatch(loadUser());
  
}, []);

return (

  <Provider store={store}>   
     
 <Router>
 
 <>
 
 <Navbar />

<section className="container">
     <Alert />
     <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact  path="/login" component={Login } /> 
     
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
       

     </Switch> 
</section>
</>
</Router>
</Provider>


)};

export default App;