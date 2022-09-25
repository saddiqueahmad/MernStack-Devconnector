import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../../action/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import { Link } from 'react-router-dom';
const Dashboard = ({getCurrentProfile,auth:{ user},profile: {profile,loading}
}) => {
   
    useEffect(() => {
      
      getCurrentProfile();

    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner />:<Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'>Welcome { user && user.name}</i>
      </p>
      
      {profile !== null ? <Fragment>
        <DashboardActions />
      </Fragment>:
      <Fragment>
        <p>You dont have a profile,please add some info </p>
        <Link to='/create-profile' className='btn btn-primary my-1'>
          Create Profile
        </Link>
      </Fragment>}
      </Fragment>
    
};

const mapStateToProps = state => ({
  
  auth: state.auth,
  profile: state.profile

})


export default connect(mapStateToProps,{ getCurrentProfile })(Dashboard);