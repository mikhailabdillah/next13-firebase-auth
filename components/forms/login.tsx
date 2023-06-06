'use client'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from '../ui/form-control'
import signIn from '@/services/auth/signin'
import Button from '../ui/button'
import Alert from '../ui/alert'
import { useState } from 'react'
import { Spinner } from '../icons'

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  }

  const [error, setError] = useState(false)

  return (
    <div className="pt-8">
      {error && (
        <Alert variant="warning">
          <div className="text-lg font-bold block mb-2">Failed!</div>
          <div>
            The email and password you entered did not match our records.
          </div>
        </Alert>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          username: Yup.string()
            .email('Please enter valid email address')
            .required('This field is required'),
          password: Yup.string().required('This field is required'),
        })}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          await signIn(values.username, values.password)
            .then((userCredential) => {
              // localStorage.setItem("next:user", JSON.stringify({
              //   token: userCredential.
              // }))
              setError(false)
              resetForm()
              setSubmitting(false)
            })
            .catch((error) => {
              setError(true)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleBlur,
          handleChange,
        }) => (
          <Form>
            <div className="flex flex-wrap w-full">
              <FormControl>
                <label htmlFor="username">Email or Username</label>
                <input
                  id="username"
                  type="text"
                  value={values.username}
                  onChange={handleChange('username')}
                  onBlur={handleBlur('username')}
                  placeholder="name@mail.com"
                />
                {Boolean(errors.username) && touched.username && (
                  <span className="text-xs text-red-600">
                    {errors.username}
                  </span>
                )}
              </FormControl>
              <FormControl>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                />
                {Boolean(errors.password) && touched.password && (
                  <span className="text-xs text-red-600">
                    {errors.password}
                  </span>
                )}
              </FormControl>
              <Button type="submit" className="w-full mt-4">
                {!isSubmitting ? 'Sign In' : <Spinner />}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
