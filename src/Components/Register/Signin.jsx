import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(8, "Password must be atleast 8 characters").required("Password is required"),
})

const Signin = () => {
    const initialValues = { email: "", password: "" }
    const navigate = useNavigate()

    const handleSubmit = (values) => {
        console.log("values: ", values)
    }
    const handleNavigate = () => navigate("/signup")
    return (
        <div>
            <div className='border'>
                <Box
                    p={8}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    <img className='mb-5' src="" alt="" />

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formikProps) => (
                            <Form className="space-y-8" >
                                <Field name="email">
                                    {({ field, form }) => <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <Input
                                            className='w-full'
                                            {...field}
                                            id='email'
                                            placeholder='Mobile Number or Email'>
                                        </Input>
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>}
                                </Field>

                                <Field name="password">
                                    {({ field, form }) => <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <Input
                                            className='w-full'
                                            {...field}
                                            id='password'
                                            placeholder='Password'>
                                        </Input>
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>}
                                </Field>
                                <Button className='w-full' mt={4} colorScheme='blue' type='submit' isLoading={formikProps.isSubmitting}>
                                    Sign In
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </div>
            <div className='border w-full border-slate-300 mt-5'>
                <p className='text-center py-2 text-sm'>If you dont have account already <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</span></p>
            </div>
        </div>
    )
}

export default Signin