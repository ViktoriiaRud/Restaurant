import { Formik, Field, ErrorMessage } from 'formik';
import *as Yup from 'yup';
import { FormTasteat } from './FormReservationStyles';


const FormReservation = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                persons: 0,
                timing: 0,
                data: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .email('Enter your Email')
                    .required('Required'),
                persons: Yup.number()
                    .required('Required'),
                timing: Yup.number()
                    .required('Required'),
                data: Yup.string()
                    .required('Required'),
            })}

            onSubmit={values => console.log(JSON.stringify(values, null, 2))}

        >

            <FormTasteat className="form">
                <label htmlFor="name">Name</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage className="error" name="name" component="div" />

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className="error" name="email" component="div" />

                <label htmlFor="persons">Persons</label>
                <Field
                    id="persons"
                    name="persons"
                    type="persons"
                />
                <ErrorMessage className="error" name="persons" component="div" />

                <label htmlFor="timing">Timing</label>
                <Field
                    id="timing"
                    name="timing"
                    type="timing"
                />
                <ErrorMessage className="error" name="timing" component="div" />


                <label htmlFor="data">Data</label>
                <Field
                    id="data"
                    name="data"
                    type="data"
                />
                <option value="data"></option>
                <ErrorMessage className="error" name="data" component="div" />


                <button type="submit">Book A Table</button>
            </FormTasteat>
        </Formik>
    )
}


export default FormReservation;





