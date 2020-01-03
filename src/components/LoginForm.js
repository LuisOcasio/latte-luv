import React from 'react';
import Axios from 'axios';
import { useFormik } from 'formik';
// import Yup from 'yup';
import { form, input, submit } from '../styles/scss/Registration.module.scss';
import { validate } from '../hooks/validate';

const LoginForm = () => {
  Axios.post('localhost:8000/register', {
    username: '',
    email: '',
    password: ''
  })
    .then(function(response) {})
    .catch(function(error) {
      console.log(error);
    });

  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validate,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form className={form} onSubmit={formik.handleSubmit}>
      <h2>Login</h2>

      <label htmlFor='username'>
        <p>Username</p>
      </label>
      <input
        className={input}
        id='username'
        name='username'
        type='username'
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <label htmlFor='email'>
        <p>Email</p>
      </label>
      <input
        className={input}
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <label htmlFor='password'>
        <p>Password</p>
      </label>
      <input
        className={input}
        id='password'
        name='password'
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <button className={submit} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
