import React, { useRef, useState } from 'react';
import { userInfoVar } from '../../../apollo/reactive-variables/user-info';
import { AppConstants } from '../../../constants/app.constants';
import {
  RegisterInput,
  useRegisterMutation,
  UserType
} from '../../../graphql-schema/graphql-schema';

export const RegisterModal: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const [registerData, setRegisterData] = useState<RegisterInput>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userType: UserType.Customer,
  });

  const [confirmPassword, setConfirmPassword] = useState<string>();

  const onEmailChange = (email: string): void => {
    setRegisterData((data) => {
      return { ...data, email };
    });
  };
  const onPasswordChange = (password: string): void => {
    setRegisterData((data) => {
      return { ...data, password };
    });
  };

  const onConfirmPasswordChange = (confirmPassword: string): void => {
    setConfirmPassword(confirmPassword);
  };

  const onFirstNameChange = (firstName: string): void => {
    setRegisterData((data) => {
      return { ...data, firstName };
    });
  };
  const onLastNameChange = (lastName: string): void => {
    setRegisterData((data) => {
      return { ...data, lastName };
    });
  };

  const onPhoneNumberChange = (phoneNumber: string): void => {
    setRegisterData((data) => {
      return { ...data, phoneNumber };
    });
  };

  const [register] = useRegisterMutation({
    onCompleted: async (data) => {
      if (data?.register?.token && data?.register?.user) {
        localStorage.setItem(AppConstants.ACCESS_TOKEN, data.register.token);
        userInfoVar(data.register.user);
        ref.current?.click();
      }
    },
    onError: () => {
      alert('Email already Registered');
    },
  });

  const isValidData = (): boolean => {
    const { email, password, firstName, lastName, phoneNumber } = registerData;

    if (!(email && password && firstName && lastName && phoneNumber)) {
      alert('Invalid Data');
      return false;
    }

    if (registerData.password !== confirmPassword) {
      alert('Password Mismatch');
      return false;
    }

    if(phoneNumber.length !== 10) {
      alert('Invalid Phone Number');
      return false;
    }

    return true;
  };

  const onRegister = () => {
    if (isValidData()) {
      register({ variables: { registerInput: registerData } });
    }
  };

  return (
    <div
      className='modal fade'
      id='registerModal'
      tabIndex={-1}
      role='dialog'
      aria-labelledby='registerModal'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>
              Register
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
          <div className='modal-body'>
            <div className='col-12 mx-auto bg-white py-3'>
              <div className='row'>
                <div className='col-12'>
                  <form>
                    <div className='row'>
                      <div className='form-group col-6'>
                        <label htmlFor='first-name'>First Name</label>
                        <input
                          type='text'
                          id='first-name'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onFirstNameChange(value)
                          }
                          required
                        />
                      </div>
                      <div className='form-group col-6'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input
                          type='text'
                          id='last-name'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onLastNameChange(value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='register-email'>Email</label>
                      <input
                        type='email'
                        id='register-email'
                        className='form-control'
                        onChange={({ target: { value } }) =>
                          onEmailChange(value)
                        }
                        required
                        autoComplete='true'
                      />
                    </div>

                    <div className='row'>
                      <div className='form-group col-6'>
                        <label htmlFor='new-password'>Password</label>
                        <input
                          type='password'
                          id='new-password'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onPasswordChange(value)
                          }
                          required
                          autoComplete='true'
                        />
                      </div>
                      <div className='form-group col-6'>
                        <label htmlFor='confirm-new-password'>
                          Confirm Password
                        </label>
                        <input
                          type='password'
                          id='confirm-new-password'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onConfirmPasswordChange(value)
                          }
                          required
                          autoComplete='true'
                        />
                      </div>
                    </div>

                    <div className='form-group'>
                      <label htmlFor='phone-number'>Phone Number</label>
                      <input
                        type='tel'
                        id='phone-number'
                        className='form-control'
                        onChange={({ target: { value } }) =>
                          onPhoneNumberChange(value)
                        }
                        required
                      />
                    </div>

                    <div className='form-check'>
                      <input
                        type='checkbox'
                        id='agree'
                        className='form-check-input'
                        required
                      />
                      <label htmlFor='agree' className='form-check-label ml-2'>
                        I agree to Terms and Conditions
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
              onClick={onRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
