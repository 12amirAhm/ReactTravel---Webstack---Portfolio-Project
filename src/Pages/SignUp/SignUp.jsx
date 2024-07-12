
import React from 'react';
import { Link } from 'react-router-dom';


function SignUp() {
    
    return (
      
  <div  class="container-fluid d-flex align-items-center justify-content-center vh-100">
  <div class="login-container bg-light rounded shadow mt-10">
    <form  class="mt-5">
      <strong style={{ color: 'rgb(8, 163, 8)', fontSize: '20px' }} > SignUp</strong>
        <div class="mb-1 mt-4 p-2">
        <label for="exampleInputEmail1" class="form-label">User Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div class="mb-1 p-2">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
        
      </div>
      <div class="mb-1 p-2">
        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
        
      </div>
      <div class="p-3">
         <button type="submit" style={{ backgroundColor: 'rgb(8, 163, 8)' }} class="btn btn-primary w-100">Register</button>
      </div>
       <Link to='/SignIn'>
       <div id="emailHelp" style={{ color: 'rgb(8, 163, 8)' }} class="form-text mt-3 mb-1">Have an Account?   <a href="#"> SignIn</a></div>
       </Link>
      
    </form>
  </div>
</div>

    )
}

export default SignUp;