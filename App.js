//import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
const initialFormData = {
  name: '',
  mobile: '',
  email: '',
  address: '',
  birthdate: '',
  gender: '',
  username: '',
  password: '',
  confirmPassword: ''
}


function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [isValid, setIsValid] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
    console.log(formData);
    // Reset form
    setFormData(initialFormData);
    setIsValid(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, mobile, email, address, dob, gender, username, password, confirmPassword } = formData;
    const isValidName = name?.trim() !== '';
    const isValidMobile = /^\d{10}$/.test(mobile);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidAddress = address?.trim() !== '';
    const isValidDOB = dob?.trim() !== '';
    const isValidGender = gender !== '';
    const isValidUsername = username?.trim() !== '';
    const isValidPassword = password?.length >= 8;
    const isValidConfirmPassword = confirmPassword === password;
  
    setIsValid(
      isValidName &&
      isValidMobile &&
      isValidEmail &&
      isValidAddress &&
      isValidDOB &&
      isValidGender &&
      isValidUsername &&
      isValidPassword &&
      isValidConfirmPassword
    );
  };
  
  // Check form validity whenever formData changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleReset = () => {
    setFormData(initialFormData);
    setIsValid(false);
  };


return (

  <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" />
        </div>
        <div>
          <button type="submit" disabled={!isValid}>Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};
export default App;
