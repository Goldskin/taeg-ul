import { FunctionComponent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../../organisms";
import Calculator from "../../organisms/Calculator";
import { FormValues, FORM_FIELDS } from "../../organisms/Form/Form.types";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({}) => {
  const formContext = useForm<FormValues>({});
  return (
    <FormProvider {...formContext}>
      <Form />
      <Calculator />
    </FormProvider>
  );
};

Layout.displayName = "Layout";

export default Layout;
