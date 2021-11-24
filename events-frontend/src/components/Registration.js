import React from 'react';

 const Registration = () => {
   return (
     <div className="register-container">
       <h2>Sign Up</h2>
       <form className="register-form">
         <label>
           Name:
           <input type="text" />
         </label>
         <label>
           Email:
           <input type="email" />
         </label>
         <label>
           Password:
           <input type="password" />
         </label>
         <div className="register__account">
           <input type="radio" />Normal User
           <input type="radio" />Service Provider
         </div>
         <button className="register__btn">Register</button>
       </form>
     </div>
   );
 }

 export default Registration;
