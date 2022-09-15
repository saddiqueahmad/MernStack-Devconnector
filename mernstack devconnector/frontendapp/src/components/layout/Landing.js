import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment,decrement } from '../../action/task';


const Landing = ({data, increment, decrement} )=> {
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
            <button onClick={()=> increment(1)}>increment</button>
            <button onClick={()=> decrement(1)}>decrement</button>
         
          </div>
        </div>
      </div>
    </section>
    )
}
const mapStateToProps = (state) => ({
  data: state.data.value
});


export default connect(mapStateToProps, {increment, decrement})(Landing);