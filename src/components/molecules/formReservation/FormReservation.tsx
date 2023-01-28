import { Formik, Field, ErrorMessage } from 'formik';
import *as Yup from 'yup';
import { FormTasteat } from './FormReservationStyles';


const FormReservation = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                persons: '',
                timing: '',
                data: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .email('Enter Email')
                    .required('Required'),
                persons: Yup.string()
                    .required('Required'),
                timing: Yup.string()
                    .required('Required'),
                data: Yup.string()
                    .required('Required'),
            })}

            onSubmit={values => console.log(JSON.stringify(values, null, 2))}

        >

            <FormTasteat className="form">
                <div>
                    <Field className="name"
                        placeholder='Name'
                        id="name"
                        name="name"
                        type="text"
                    />
                    <ErrorMessage className="error" name="name" component="div" />
                </div>

                <div>
                    <Field className="email"
                        id="email"
                        placeholder='Email'
                        name="email"
                        type="email"
                    />
                    <ErrorMessage className="error" name="email" component="div" />
                </div>
                <div>
                    <Field
                        placeholder='Persons'
                        id="persons"
                        name="persons"

                    />
                    <ErrorMessage className="error" name="persons" component="div" />
                </div>

                <div>
                    <Field
                        placeholder='Timing'
                        id="timing"
                        name="timing"
                        type="timing"
                    />
                    <ErrorMessage className="error" name="timing" component="div" />
                </div>

                <div>

                    <Field
                        placeholder='Data'
                        id="data"
                        name="data"
                        type="data"
                    />

                    <ErrorMessage className="error" name="data" component="div" />
                </div>



                <button type="submit">Book A Table</button>
            </FormTasteat>
        </Formik>
    )
}


export default FormReservation;





