import React, { useRef, useState } from 'react';
import { userInfoVar } from '../../../apollo/reactive-variables/user-info';
import { AppConstants } from '../../../constants/app.constants';
import { useLoginMutation } from '../../../graphql-schema/graphql-schema';

export const LoginModal: React.FC = () => {

  const ref = useRef<HTMLButtonElement>(null);

  const [login] = useLoginMutation({
    onCompleted: async (data) => {
      if (data?.login?.token && data?.login?.user) {
        localStorage.setItem(AppConstants.ACCESS_TOKEN, data.login.token);
        userInfoVar(data.login.user);
        ref.current?.click();
      }
    },
    onError: () => {
      alert('Invalid Email/Password');
    },
  });

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  return (
    <div
      className='modal fade'
      id='loginModal'
      tabIndex={-1}
      role='dialog'
      aria-labelledby='loginModal'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        {/* Modal Content */}
        <div className='modal-content'>
          {/* Modal Header */}
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>
              Login
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className='modal-body'>
            <div className='col-12 mx-auto bg-white py-3 mb-4'>
              <div className='row'>
                <div className='col-12'>
                  <form>
                    <div className='form-group'>
                      <label htmlFor='login-email'>Email</label>
                      <input
                        type='email'
                        id='login-email'
                        className='form-control'
                        onChange={({ target: { value } }) => setEmail(value)}
                        required
                        autoComplete='true'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='current-password'>Password</label>
                      <input
                        type='password'
                        id='current-password'
                        className='form-control'
                        onChange={({ target: { value } }) => setPassword(value)}
                        required
                        autoComplete='true'
                      />
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        id='remember'
                        className='form-check-input'
                      />
                      <label
                        htmlFor='remember'
                        className='form-check-label ml-2'
                      >
                        Remember Me
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
              ref={ref}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => login({ variables: { email, password } })}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
