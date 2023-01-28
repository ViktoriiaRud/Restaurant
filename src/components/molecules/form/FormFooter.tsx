import { Formik, Field, ErrorMessage } from 'formik';
import { MyForm } from './FormFooterStyles';
import *as Yup from 'yup';

const FormFooter = () => {
    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={Yup.object({
                email: Yup.string()
            })}

            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            <MyForm className="form">
                <div>
                    {/* <label htmlFor="email">Email</label> */}
                    <Field
                        placeholder='Email'
                        id="email"
                        name="email"
                        type="email"
                    />
                    <ErrorMessage className="error" name="email" component="div" />
                </div>

                <div>
                    <button type="submit">Subscribe</button>
                </div>

            </MyForm>
        </Formik>
    )
}

export default FormFooter;

