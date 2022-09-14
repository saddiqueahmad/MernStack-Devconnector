import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Landing = ({data} )=> {
   return (
    <section className="Landing">
    {data}
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
            <button type="button">increment!</button>
            <button type="button">decrement!</button>
          </div>
        </div>
      </div>
    </section>
    )
}

const mapStateToProp = (state)=> ({
  data: state.data
});

export default connect(mapStateToProp, {}) (Landing);