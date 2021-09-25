import { FunctionComponent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../../organisms";
import Calculator from "../../organisms/Calculator";
import {
  BORROW_TYPE,
  FormValues,
  FORM_FIELDS,
  UNIT_TIME,
} from "../../organisms/Form/Form.types";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({}) => {
  const formContext = useForm<FormValues>({
    defaultValues: {
      [FORM_FIELDS.AMOUNT_TO_BORROW]: 1000,
      [FORM_FIELDS.BORROWED_TIME]: 19,
      [FORM_FIELDS.REFUND_PER_MONTH]: 1200,
      [FORM_FIELDS.UNIT_TIME]: UNIT_TIME.MONTH,
      [FORM_FIELDS.BORROW_TYPE]: BORROW_TYPE.TOTAL,
    },
  });
  return (
    <FormProvider {...formContext}>
      <Form />
      <Calculator />
    </FormProvider>
  );
};

Layout.displayName = "Layout";

export default Layout;
