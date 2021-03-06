import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
  type?: HTMLInputTypeAttribute & string;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  textarea,
  ...props
}) => {
  let InputOrTextarea = Input as any;
  if (textarea) {
    InputOrTextarea = Textarea;
  }
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea
        {...props}
        {...field}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
