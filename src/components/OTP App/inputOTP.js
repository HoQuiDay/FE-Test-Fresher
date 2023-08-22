import React, { useRef, useState } from 'react';
import OtpInput from 'react18-input-otp';
import CountDownAnimation from './CountDownAnimation';

const InputOTP = (props) => {
  const childRef = useRef();
  const [otp, setOtp] = useState('');
  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOTPParent(otp);
  };

  return (
    <div className='input-otp-container'>
      <div className='title'>Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle='input-customize'
      />
      <div className='timer'>
        <CountDownAnimation
          setIsOverTime={props.setIsOverTime}
          ref={childRef}
        />
      </div>
      <div className='action'>
        <button
          className='clear'
          disabled={!props.isOvertime}
          onClick={() => childRef.current.resetTimer()}>
          Clear
        </button>
        <button
          disabled={props.isOvertime}
          className='confirm'
          onClick={() => props.handleSubmit()}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
