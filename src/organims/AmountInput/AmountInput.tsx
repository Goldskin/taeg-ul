import React, { FunctionComponent, Ref } from "react";
import { Input } from "../../atoms";
import { InputProps } from "../../atoms/Input/Input";

interface AmountInputProps extends Omit<InputProps, "label"> {}
interface AmountInputWithRefProps extends AmountInputProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const AmountInput: FunctionComponent<AmountInputWithRefProps> = ({
  forwardedRef,
  ...props
}) => {
  return <Input label="Amount" type="number" {...props} ref={forwardedRef} />;
};

AmountInput.displayName = "AmountInput";

export default React.forwardRef<HTMLDivElement, AmountInputProps>(
  (props, ref) => <AmountInput {...props} forwardedRef={ref} />
);
