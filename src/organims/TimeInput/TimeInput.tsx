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
  return <Input label="Time" type="number" {...props} ref={forwardedRef} />;
};

TimeInput.displayName = "TimeInput";

export default React.forwardRef<HTMLDivElement, TimeInputProps>(
  (props, ref) => <TimeInput {...props} forwardedRef={ref} />
);
