import { InputAdornment } from "@mui/material";
import React, { FunctionComponent, Ref } from "react";
import { Input } from "../../atoms";
import { InputProps } from "../../atoms/Input/Input";

interface RefundInputProps extends Omit<InputProps, "label"> {}
interface RefundInputWithRefProps extends RefundInputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const RefundInput: FunctionComponent<RefundInputWithRefProps> = ({
  forwardedRef,
  ...props
}) => {
  return (
    <Input
      label="Monthly payment"
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="start">€/month</InputAdornment>,
      }}
      {...props}
      ref={forwardedRef}
    />
  );
};

RefundInput.displayName = "RefundInput";

export default React.forwardRef<HTMLDivElement, RefundInputProps>(
  (props, ref) => <RefundInput {...props} forwardedRef={ref} />
);
