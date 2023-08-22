import React, { useState } from 'react';
import GenerateOTP from './GenerateOTP';
import InputOTP from './inputOTP.js';
import './OTP.scss';
function OtpApp() {
  const [orgOTPParent, setOrgOTPParent] = useState('');
  const [userOTPParent, setUserOTPParent] = useState('');
  const [isOvertime, setIsOverTime] = useState(false);
  const handleSubmit = () => {
    if (!orgOTPParent) {
      alert('Please Generate OPT');
      return;
    }
    if (!userOTPParent) {
      alert('Please Enter OPT');
      return;
    }
    if (+orgOTPParent === +userOTPParent) {
      alert('Correct OPT');
    } else alert('Uncorrected OPT');
  };
  return (
    <div className='otp-parent-container'>
      <GenerateOTP setOrgOTPParent={setOrgOTPParent} />
      <InputOTP
        setUserOTPParent={setUserOTPParent}
        handleSubmit={handleSubmit}
        setIsOverTime={setIsOverTime}
        isOvertime={isOvertime}
      />
    </div>
  );
}

export default OtpApp;
