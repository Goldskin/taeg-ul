import { Card, CardContent, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import AmountInput from "../../organims/AmountInput";
import TimeInput from "../../organims/TimeInput";

interface FormProps {}

interface FormValues {
  amountToBorrow: number;
  borrowedTime: number;
}

const Form: FunctionComponent<FormProps> = () => {
  const formContext = useForm<FormValues>({
    defaultValues: {
      amountToBorrow: 0,
      borrowedTime: 0,
    },
  });
  const { register } = formContext;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <AmountInput {...register("amountToBorrow")} />
          </Grid>
          <Grid item xs={6}>
            <TimeInput {...register("borrowedTime")} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Form.displayName = "Form";

export default Form;
