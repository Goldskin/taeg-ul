import { InputAdornment } from "@mui/material";
import React, { FunctionComponent, Ref } from "react";
import { Input } from "../../atoms";
import { InputProps } from "../../atoms/Input/Input";

interface MoneyInputProps extends Omit<InputProps, "label"> {}
interface MoneyInputWithRefProps extends MoneyInputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const MoneyInput: FunctionComponent<MoneyInputWithRefProps> = ({
  forwardedRef,
  ...props
}) => {
  return (
    <Input
      label="Money"
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="start">€</InputAdornment>,
      }}
      {...props}
      ref={forwardedRef}
    />
  );
};

MoneyInput.displayName = "MoneyInput";

export default React.forwardRef<HTMLDivElement, MoneyInputProps>(
  (props, ref) => <MoneyInput {...props} forwardedRef={ref} />
);
