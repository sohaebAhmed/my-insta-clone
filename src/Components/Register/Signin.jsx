import { Box, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(8, "Password must be atleast 8 characters").required("Password is required"),
})

const Signin = () => {
    const initialValues = { email: "", password: "" }
    const handleSubmit = (values) => {
        console.log("values: ", values)
    }
    return (
        <div>
            <div>
                <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <img src="" alt="" />
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formkProps) => (
                            <Form>
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
                            </Form>
                        )}
                    </Formik>
                </Box>
            </div>
        </div>
    )
}

export default Signin