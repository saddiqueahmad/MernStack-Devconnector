import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../../action/profile';
const Dashboard = ({getCurrentProfile,auth,profile}) => {
   
    useEffect(() => {
      
      getCurrentProfile();

    });

    return <div>HELLO!!!!</div>;
};

const mapStateToProps = state => ({
  
  auth: state.auth,
  profile: state.profile

})


export default connect(mapStateToProps,{ getCurrentProfile })(Dashboard);