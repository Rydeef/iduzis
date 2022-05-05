import {useField} from "formik";
import {FC} from "react";
import TextField from '@mui/material/TextField';

interface Props {
  label: string;
  name: string;
  type?: string;
}

export const TextInput: FC<Props> = ({label, type, ...props}) => {
  const [field, {touched, error}] = useField(props);
  const isError = touched && !!error
  return (
    <div>
      <TextField className='w-full' type={type || 'text'} error={isError} id="standard-basic" label={label}
                 variant="standard" {...field}/>
      {isError && (
        <div className="error text-sm text-red-600 ">{error}</div>
      )}
    </div>
  );
};