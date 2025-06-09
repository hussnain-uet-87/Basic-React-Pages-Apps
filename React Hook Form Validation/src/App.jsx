import React from 'react'
import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data)  {
    console.log("Submitting Form ", data)
  }
  //return code
  return (
    <>
    <div className='main'>
    <h1>React Hook Form Validation</h1>
    <div className="container">
      <h2>Enter Details </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <p>First Name : </p>
        <input type="text" {...register('firstName' , {
          required: "First name is required",
          minLength: {
            value: 6,
            message: "First Name minimum Length should be 6 characters",
          },
          maxLength: {
            value: 14,
            message: "First name maximum length should be atmost 14 characters",
          }
        }
        )}/>
        {errors.firstName && <p className='error-msg'> {errors.firstName.message} </p>}
        </div>
        <div className="row">
          <p>Last Name : </p>
          <input type="text" {...register('lastName',{
            required: "Last name is required",
            minLength: {
              value: 6,
              message: "Last name minimum length should be atleast 6 characters"
            },
            maxLength: {
              value: 14,
              message: "Last name minimum length should be almost 14 characters"
            }
          })}/>
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
        </div>
        <div className="row">
          <p>Age : </p>
          <input type="number" {...register('age',
           {
             required: "Age is Required",
             min: {
              value: 18,
              message: "Minimum Age Should be 18 Years old"
             },
             max: {
              value: 40,
              message: "Maximum age Should be 40 Years old"
             }
           }

          )}/>
          {errors.age && <p className='error-msg'>{errors.age.message}</p>}
        </div>
        <div className="row">
          <p>Email : </p>
          <input type="email" {...register('email',{
            required: "Email is Required",
            pattern: {
              value: /@/,
              message: "Email Must Contain @ ",
            }
          })} />
          {errors.email && <p className='error-msg'>{errors.email.message}</p>}
        </div>
          
        <div className="row">
          <p>Password : </p>
          <input type="text" {...register('password',{
            required: "Password is Required",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)/,
              message: "Passowrd should be a mix of alphabets and numbers 0-9 "
            },
            minLength: {
              value: 8,
              message: "Password Length should be atleast 8 characters/numbers",
            },
            maxLength: {
              value: 16,
              message: "Password should not be longer than 16 characters"
            }
          })}/>
          {errors.password && <p className='error-msg'>{errors.password.message}</p>}
        </div>
        <input id='btn' type="submit"  />
      </form>
    </div>
    </div>
    </>
  )
}

export default App