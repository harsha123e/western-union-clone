import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import { ReactComponent as LogoImage } from '../../assets/wu-logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as GlobeIcon } from '../../assets/globe.svg';

const Logo = () => (
  <Link to="/" className="logo-section">
    <LogoImage />
    <h1>Western Union</h1>
  </Link>
);

const SendMoney = () => (
  <div className="menu-section">
    <Link to="/send-money">Send Money</Link>
    <Link to="/">Pick up cash</Link>
  </div>
);

const MenuIconSection = () => (
  <MenuIcon title="Menu" aria-label="Menu Icon" className="menu-icon" />
);

const LanguageSection = () => (
  <div className="language-section">
    <GlobeIcon />
    EN
  </div>
);

const SignUp = () => (
  <div className="auth-section">
    <Link to="/sign-up">Join now</Link>
  </div>
);

const Login = () => (
    <div className="auth-section">
      <Link to="/login">Log in</Link>
    </div>
  );

export default function Navigation() {
  return (
    <header>
      <nav>
        <Logo />
        <SendMoney />
        <MenuIconSection />
        <LanguageSection />
        <SignUp />
        <Login />
      </nav>
    </header>
  );
}