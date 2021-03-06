import { Button } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import CustomButton from "../../sharedComponents/formComponent/CustomButton";
import { TextInput } from "../../sharedComponents/formComponent/TextField";

YupPassword(Yup);

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Required"), // validation remake
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .password()
    .required("Required"),
});

const LoginForm = () => {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      firstName: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-72">
          <TextInput label="Username" name="username" type="username" />
          <TextInput label="Password" name="password" type="password" />
          <CustomButton className="mt-4 w-full" type="submit">
            Log in
          </CustomButton>
        </div>
      </form>
    </FormikProvider>
  );
};
export default LoginForm;
