import { InputAdornment } from "@mui/material";
import React, { FunctionComponent, Ref } from "react";
import { Input } from "../../atoms";
import { InputProps } from "../../atoms/Input/Input";

interface RateInputProps extends Omit<InputProps, "label"> {}
interface RateInputWithRefProps extends RateInputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const RateInput: FunctionComponent<RateInputWithRefProps> = ({
  forwardedRef,
  ...props
}) => {
  return (
    <Input
      label="Rate"
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="start">%</InputAdornment>,
      }}
      {...props}
      ref={forwardedRef}
    />
  );
};

RateInput.displayName = "RateInput";

export default React.forwardRef<HTMLDivElement, RateInputProps>(
  (props, ref) => <RateInput {...props} forwardedRef={ref} />
);
