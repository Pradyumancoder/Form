import React from 'react';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import AdminPage from './Components/AdminPage/AdminPage';


const App = () => {
  // You can define state, hooks, and other logic here if needed

  return (
    <div className="App">
      <h1>Registration App</h1>
      <RegistrationForm />
      {/* <AdminPage /> */}
    </div>
  );
};

export default App;
