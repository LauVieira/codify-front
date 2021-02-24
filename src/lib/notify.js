import React from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { IoCheckmark } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastProvider() {
  return (
    <Toast />
  );
}

const Toast = styled(ToastContainer)`
  .Toastify__toast--success {
    background: var(--color-white);
    border-radius: var(--radius-regular);
    box-shadow: var(--shadow-regular);

    .Toastify__toast-body {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      padding: 0;
    }

    .box {
      margin-left: 5px;
    }

    h1 {
      color: var(--color-darkgreen);
    }

    h2 {
      color: #898989;
      font-weight: 300;
    }
  }
`;

const defaultOptions = {
  position: 'top-right',
  autoClose: 8000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const Wrapper = ({ children }) => (
  <>
    <IoCheckmark color="#008E16" fontSize="40px" />
    <div className="box">
      { children }
    </div>
  </>
);

export function warning(message, options = {}) {
  return toast.warn(message, { ...defaultOptions, ...options });
}

export function info(message, options = {}) {
  return toast.info(message, { ...defaultOptions, ...options });
}

export function success(message, options = {}) {
  return toast.success(
    <Wrapper> 
      <h1> 
        {' '}
        { message[0] }
        {' '}
      </h1>
      { message[1] && (
      <h2> 
        {' '}
        { message[1] }
        {' '}
      </h2>
      ) }
    </Wrapper>, 
    { ...defaultOptions, ...options },
  );
}

export function error(message, options = {}) {
  return toast.error(message, { ...defaultOptions, ...options });
}
