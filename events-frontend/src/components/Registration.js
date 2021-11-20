// import React from 'react';
// import './style.css';

// const Registration = () => {
//   return (
//     <div className="base-container">
//       <div className="header">Register</div>
//       <div className="content">
//         <div className="image"></div>
//         <div className="form">
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input type="text" name="username" placeholder="username" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" name="email" placeholder="email" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" name="password" placeholder="password" />
//           </div>
//         </div>
//       </div>
//       <div className="footer">
//         <button type="button" className="btn">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Registration;

import React from 'react'

const Registration = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <label>
          Name:
          <input />
        </label>
        <label>
          Email:
          <input />
        </label>
        <label>
          Password:
          <input />
        </label>
        <input type="radio" value="normal_user" name="account_type" />Normal user
        <input type="radio" value="admin" name="account_type" />Service Provider
      </form>
    </div>
  )
}

export default Registration

