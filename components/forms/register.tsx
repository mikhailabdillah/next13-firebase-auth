'use client'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from '../ui/form-control'
import signUp from '@/services/auth/signup'
import Button from '../ui/button'
import Alert from '../ui/alert'
import { Spinner } from '../icons'
import { useState } from 'react'

const RegisterForm = () => {
  const initialValues = {
    email: '',
    password: '',
    repassword: '',
  }
  const [error, setError] = useState(false)

  return (
    <div className="pt-8">
      {error && (
        <Alert variant="warning">
          <div className="text-lg font-bold block mb-2">Failed!</div>
          <div>Something went wrong please try again.</div>
        </Alert>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Please enter valid email address')
            .required('This field is required'),
          password: Yup.string()
            .min(8, 'Your password is too short.')
            .required('This field is required'),
          repassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Please retype your password.'),
        })}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          await signUp(values.email, values.password)
            .then((userCredential) => {
              resetForm()
            })
            .catch((error) => {
              // Error state
              setError(true)
            })
            .finally(() => {
              setError(false)
              setSubmitting(false)
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
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Enter email address"
                />
                {Boolean(errors.email) && touched.email && (
                  <span className="text-xs text-red-600">{errors.email}</span>
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
              <FormControl>
                <label htmlFor="repassword">Retype Password</label>
                <input
                  id="repassword"
                  type="password"
                  value={values.repassword}
                  onChange={handleChange('repassword')}
                  onBlur={handleBlur('repassword')}
                  placeholder="Retype your Password"
                />
                {Boolean(errors.repassword) && touched.repassword && (
                  <span className="text-xs text-red-600">
                    {errors.repassword}
                  </span>
                )}
              </FormControl>
              <Button type="submit" className="w-full mt-4">
                {!isSubmitting ? 'Create an Account' : <Spinner />}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm
