import React, {useState, useEffect} from "react";

function RegisterContainer() {

        const [email, setEmail] = useState('');
        const [isValidEmail, setIsValidEmail] = useState(true);
      
        const handleEmailChange = (event) => {
          const enteredEmail = event.target.value;
          setEmail(enteredEmail);
        };
      
        const validateEmail = () => {
            const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const isValid = emailRegex.test(email);
            setIsValidEmail(isValid);
          };
    
  return (
    <div>
      <form className="flex flex-col items-center" action="login">
        <h1
          className="text-5xl font-semibold"
          style={{ fontFamily: "Hind Siliguri" }}
        >
          REGISTER FORM
        </h1>
        <input type="text" placeholder="User name*" />
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email*"/>
        {!isValidEmail && <p className="text-red-500">Invalid email</p>}
        <input type="password" placeholder="Password*" />
        <button className="text-lg" onClick={validateEmail}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default RegisterContainer;
