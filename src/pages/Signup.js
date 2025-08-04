import React from 'react'
import signup from "../assets/signup.png"
import Template from '../components/Template';

const Signup = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
      <Template
      title="Join the millions learning to code with StudyNation for free"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career"
      image={signup}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
    )
}

export default Signup
