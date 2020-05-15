import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../action/authAction';

const Finance = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
	
	// eslint-disable-next-line to the line before.
  }, []);

  return (
    <div className='mt-5'>
      <div className='row'>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Finance Master</h4>

              <i className='fas fa-users float-right fa-5x'></i>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Finance Transaction</h4>

              <i className='far fa-calendar-alt float-right fa-5x'></i>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Finance Dashboard</h4>

              <i className='far fa-sticky-note float-right fa-5x'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { loadUser })(Finance);
