import React, { useEffect, useState } from 'react';
import ResumeForm from './ResumeForm';
import LoadingDiv from './LoadingDiv';
import SuccessDiv from './SuccessDiv';
import FailureDiv from './FailureDiv';

const ResumeModal = () => {
  const [mailStatus, setMail] = useState({});
  const [loadingStatus, setLoading] = useState('dormant');

  useEffect(() => {
    if (mailStatus == 'successful') setLoading('success');
    else if (mailStatus == 'failure') setLoading('fail');
  }, [mailStatus]);

  return (
    <div>
      <div
        id="modal"
        class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50 transform scale-0 transition-transform duration-300"
      >
        {loadingStatus == 'dormant' ? (
          <ResumeForm loading={setLoading} mail={setMail} />
        ) : loadingStatus == 'loading' ? (
          <LoadingDiv />
        ) : loadingStatus == 'success' ? (
          <SuccessDiv loading={setLoading}/>
        ) : (
          <FailureDiv loading={setLoading}/>
        )}
      </div>
    </div>
  );
};

export default ResumeModal;
