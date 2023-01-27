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
                    .email('Enter your Email')
                    .required('Required'),
            })}

            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            <MyForm className="form">
                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className="error" name="email" component="div" />
                <button type="submit">Subscribe</button>
            </MyForm>
        </Formik>
    )
}

export default FormFooter;

