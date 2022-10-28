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
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import Profiles from './components/profiles/Profiles';
import AddExperience from './components/profile-forms/AddExperience';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import AddEducation from './components/profile-forms/AddEducation';
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
      <Route exact  path="/profiles" component={Profiles } />
      <Route exact  path="/profile/:id" component={Profile } />
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
      <PrivateRoute exact path="/Edit-profile" component={EditProfile}/>
      <PrivateRoute exact path="/Add-Experience" component={AddExperience}/>
      <PrivateRoute exact path="/Add-Education" component={AddEducation}/>
      <PrivateRoute exact path="/posts" component={Posts}/>
       

     </Switch> 
</section>
</>
</Router>
</Provider>


)};

export default App;