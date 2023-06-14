import { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lưu thông tin người dùng vào file JSON
    saveFormDataToJson(formData);
    // Xóa dữ liệu trong form
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Tên:</label>
        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Mật khẩu:</label>
        <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit">Đăng ký</button>
    </form>
  );
}

function saveFormDataToJson(formData) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(formData);
  localStorage.setItem('users', JSON.stringify(users));
}

export default SignupForm;