import { FunctionComponent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../../organisms";
import Calculator from "../../organisms/Calculator";
import {
  FormValues,
  FORM_FIELDS,
  TIME_TYPE,
} from "../../organisms/Form/Form.types";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({}) => {
  const formContext = useForm<FormValues>({
    defaultValues: {
      [FORM_FIELDS.AMOUNT_TO_BORROW]: 120000,
      [FORM_FIELDS.BORROWED_TIME]: 10,
      [FORM_FIELDS.REFUND_PER_MONTH]: 1200,
      [FORM_FIELDS.TYPE_TIME]: TIME_TYPE.YEAR,
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
