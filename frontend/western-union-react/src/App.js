import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import CurrenyConverter from './pages/CurrencyConverter/CurrenyConverter';
import FraudAwareness from './pages/FraudAwareness/FraudAwareness';
import MobileApp from './pages/MobileApp/MobileApp';
import ReceiveMoney from './pages/ReceiveMoney/ReceiveMoney';
import SendMoney from './pages/SendMoney/SendMoney';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/currency-converter" element={<CurrenyConverter />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/fraud-awareness" element={<FraudAwareness />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/receive-money" element={<ReceiveMoney />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
