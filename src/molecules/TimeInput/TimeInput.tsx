import { InputAdornment } from "@mui/material";
import React, { FunctionComponent, Ref } from "react";
import { Input } from "../../atoms";
import { InputProps } from "../../atoms/Input/Input";
import { capitalize } from "../../helpers";

interface TimeInputProps extends Omit<InputProps, "label"> {
  suffix: string;
}
interface TimeInputWithRefProps extends TimeInputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const TimeInput: FunctionComponent<TimeInputWithRefProps> = ({
  forwardedRef,
  suffix,
  ...props
}) => {
  return (
    <Input
      label="Time"
      type="number"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {capitalize(suffix)}s
          </InputAdornment>
        ),
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
