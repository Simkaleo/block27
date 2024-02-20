import './App.css';
import { useState, useEffect } from 'react';
import SignUpForm from "./SignUpForm"
import Authenticate from "./Authenticate"

export default function App () {
  return (
    <>
    <Authenticate />
    <SignUp form/>
    </>
  );
}