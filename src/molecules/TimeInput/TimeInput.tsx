import { InputAdornment } from "@mui/material";
import React, { FunctionComponent, Ref } from "react";
import { Input } from "../../atoms";
import { InputProps } from "../../atoms/Input/Input";

interface TimeInputProps extends Omit<InputProps, "label"> {}
interface TimeInputWithRefProps extends TimeInputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const TimeInput: FunctionComponent<TimeInputWithRefProps> = ({
  forwardedRef,
  ...props
}) => {
  return (
    <Input
      label="Time"
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="start">years</InputAdornment>,
      }}
      {...props}
      ref={forwardedRef}
    />
  );
};

TimeInput.displayName = "TimeInput";

export default React.forwardRef<HTMLDivElement, TimeInputProps>(
  (props, ref) => <TimeInput {...props} forwardedRef={ref} />
);
