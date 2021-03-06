import { InputAdornment } from "@mui/material";
import React, { FunctionComponent, Ref } from "react";
import { Input } from "../../atoms";
import { InputProps } from "../../atoms/Input/Input";
import { capitalize } from "../../helpers";

interface TimeInputProps extends InputProps {
  suffix: string;
}
interface TimeInputWithRefProps extends TimeInputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const TimeInput: FunctionComponent<TimeInputWithRefProps> = ({
  forwardedRef,
  suffix,
  label = "Time",
  ...props
}) => {
  return (
    <Input
      label={label}
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
