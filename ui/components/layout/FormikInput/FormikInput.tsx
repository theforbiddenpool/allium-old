import { FieldHookConfig, useField } from 'formik';
import {
  FormControl, FormErrorMessage, FormLabel, Input, InputProps,
} from '@chakra-ui/react';

interface FormControlProps {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

type FormikInputProps =
  FieldHookConfig<string> & FormControlProps & InputProps & {
    label?: string
  };

function FormikInput({ label, id, ...props }: FormikInputProps) {
  const [field, meta] = useField(props);

  const fmp: FormControlProps = {};
  let inputProps: InputProps = {};

  ({
    isDisabled: fmp.isDisabled,
    isReadOnly: fmp.isReadOnly,
    isRequired: fmp.isRequired,
    ...inputProps
  } = props);

  return (
    <FormControl isInvalid={meta.touched && Boolean(meta.error)} {...fmp}>
      { label && <FormLabel htmlFor={id}>{label}</FormLabel> }
      <Input id={id} {...field} {...inputProps} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default FormikInput;
