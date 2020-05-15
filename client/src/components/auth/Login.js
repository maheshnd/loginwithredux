import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, loadUser } from '../../action/authAction';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ auth: { isAuthenticated }, login }, props) => {
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const { name, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && password !== '') {
      login({
        name,
        password,
      });
    }
  };

  return (
    <div style={log}>
      <form onSubmit={onSubmit}>
        <div className='form-row'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='UserName'
              required
              name='name'
              value={name}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='form-row mt-3'>
          <div className='col'>
            <input
              className='form-control'
              placeholder='Password'
              required
              name='password'
              type='password'
              value={password}
              onChange={onChange}
            />
          </div>
        </div>
        <button className='btn btn-primary mt-2' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

const log = {
  width: '35%',
  margin: '135px auto',
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, loadUser })(Login);
