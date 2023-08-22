import React, { useState } from 'react';

const GenerateOTP = (props) => {
  const [orgOTP, setOrgOTP] = useState('');
  const handleClickBtn = () => {
    const random = Math.floor(100000 + Math.random() * 900000);
    setOrgOTP(random);
    props.setOrgOTPParent(random);
  };
  return (
    <div className='generate-otp-container'>
      <button onClick={() => handleClickBtn()}>GenerateOTP</button>
      <div className='title'>Your OTP: {orgOTP}</div>
    </div>
  );
};

export default GenerateOTP;
