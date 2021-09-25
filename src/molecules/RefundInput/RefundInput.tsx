import { InputAdornment } from "@mui/material";
import React, { FunctionComponent, Ref } from "react";
import { Input } from "../../atoms";
import { InputProps } from "../../atoms/Input/Input";

interface RefundInputProps extends InputProps {
  suffix?: string;
}
interface RefundInputWithRefProps extends RefundInputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const RefundInput: FunctionComponent<RefundInputWithRefProps> = ({
  forwardedRef,
  label = "Monthly payment",
  suffix = "€",
  ...props
}) => {
  return (
    <Input
      label={label}
      type="number"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">{suffix}</InputAdornment>
        ),
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
