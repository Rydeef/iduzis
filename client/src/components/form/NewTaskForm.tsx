import { Button } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import CustomButton from "../../sharedComponents/formComponent/CustomButton";
import { TextInput } from "../../sharedComponents/formComponent/TextField";
import {FC} from "react";

YupPassword(Yup);

const validationSchema = Yup.object().shape({
    task: Yup.string().min(2, "Too Short!")
        .max(50, "Too Long!").required("Required")
});

export type SubmitNewTaskForm =  (values: {task: string}) => void

interface Props{
    onSubmit: SubmitNewTaskForm;
}

const NewTaskForm:FC<Props> = ({onSubmit}) => {
    const formik = useFormik({
        validationSchema,
        initialValues: {
            task: "",
        },
        onSubmit,
    });

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <div className="w-72">
                    <TextInput label="Task" name="task" />
                    <CustomButton className="mt-4" type="submit">
                        Submit
                    </CustomButton>
                </div>
            </form>
        </FormikProvider>
    );
};
export default NewTaskForm;
