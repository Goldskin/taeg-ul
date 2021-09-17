import { TextField, TextFieldProps } from "@mui/material";
import React, { FunctionComponent, Ref } from "react";

export interface InputProps extends Omit<TextFieldProps, "variant"> {}
export interface InputPropsWithRef extends InputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const Input: FunctionComponent<InputPropsWithRef> = ({
  forwardedRef,
  ...props
}) => {
  return <TextField variant="filled" fullWidth {...props} ref={forwardedRef} />;
};

Input.displayName = "Input";

export default React.forwardRef<HTMLDivElement, InputProps>((props, ref) => (
  <Input forwardedRef={ref} {...props} />
));
