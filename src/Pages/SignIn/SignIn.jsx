import React from 'react';
import { Link } from 'react-router-dom';


function SignIn() {
    
    return (
      
  <div class="container-fluid d-flex align-items-center justify-content-center vh-100">
  <div class="login-container bg-light rounded shadow mt-10">
    <form class="mt-5">
      <strong style={{ color: 'rgb(8, 163, 8)', fontSize: '20px' }} >Sign-In</strong>
      <div class="mb-1 mt-4 p-2">
        <label for="exampleInputEmail1" class="form-label">User Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div class="mb-1 p-2">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
        <div id="emailHelp" class="form-text mt-3"><a href="#">Forgot password?</a></div>
      </div>
      <div class="p-2">
         <button style={{ backgroundColor: 'rgb(8, 163, 8)' }} type="submit" class="btn btn-primary w-100">SignIn</button>
      </div>
       <Link to='/SignUp'>
       <div id="emailHelp" style={{ color: 'rgb(8, 163, 8)' }} class="form-text mt-3 mb-1">New here?   <a href="#" >  Create Account</a></div>
       </Link>
      
    </form>
  </div>
</div>

    )
}

export default SignIn;