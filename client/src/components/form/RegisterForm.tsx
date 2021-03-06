import {Button} from "@mui/material";
import {FormikProvider, useFormik} from "formik";
import * as Yup from 'yup';
import YupPassword from 'yup-password'
import CustomButton from "../../sharedComponents/formComponent/CustomButton";
import {TextInput} from "../../sharedComponents/formComponent/TextField";

YupPassword(Yup)

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .password()
    .required('Required'),
});

const RegisterForm = () => {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-72 flex flex-col justify-center">
          <TextInput label="Username" name="username"/>
          <TextInput label="Email" name="email" type="email"/>
          <TextInput label="Password" name="password" type='password'/>
          <TextInput label="Confirm Password" name="confirmPassword" type='password'/>
          <CustomButton className="mt-4 px-5 w-full bg-blue" type="submit">Register</CustomButton>
        </div>
      </form>
    </FormikProvider>
  );
}
export default RegisterForm;