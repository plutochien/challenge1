import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Loader type="ThreeDots" color="#17A2F2" height="100" width="100" />
  </div>
);

export default Spinner;
