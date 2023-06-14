import React, { useState, useEffect } from "react";

function RegisterContainer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
  };

  const validateEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  return (
    <div>
      <form
        className="mx-auto flex w-96 flex-col items-center bg-blue-500"
        style={{ fontFamily: "Hind" }}
        action="register"
      >
        <h1 className="text-5xl font-semibold">REGISTER FORM</h1>
        <input
          className="userNameInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4"
          type="text"
          placeholder="User name*"
        />
        <input
          className="emailInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email*"
        />
        {!isValidEmail && <p className="text-red-500">Invalid email</p>}
        <input
          className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4"
          type="password"
          placeholder="Password*"
        />
        <button className="text-lg" onClick={validateEmail}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default RegisterContainer;

// function SignupForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Lưu thông tin người dùng vào file JSON
//     saveFormDataToJson(formData);
//     // Xóa dữ liệu trong form
//     setFormData({
//       name: '',
//       email: '',
//       password: ''
//     });
//   };

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Tên:</label>
//         <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="password">Mật khẩu:</label>
//         <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
//       </div>
//       <button type="submit">Đăng ký</button>
//     </form>
//   );
// }

// function saveFormDataToJson(formData) {
//   const users = JSON.parse(localStorage.getItem('users')) || [];
//   users.push(formData);
//   localStorage.setItem('users', JSON.stringify(users));
// }