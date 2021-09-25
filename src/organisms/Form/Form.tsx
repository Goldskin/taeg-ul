import { Card, CardContent, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { MoneyInput, RateInput, RefundInput, TimeInput } from "../../molecules";

import { FORM_FIELDS } from "./Form.types";
import useCalculateFormContext from "./useCalculateFormContext";

const Form: FunctionComponent = () => {
  const { register } = useCalculateFormContext();

  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MoneyInput {...register(FORM_FIELDS.AMOUNT_TO_BORROW)} autoFocus />
          </Grid>
          <Grid item xs={6}>
            <TimeInput
              {...register(FORM_FIELDS.BORROWED_TIME, { maxLength: 2 })}
            />
          </Grid>
          <Grid item xs={6}>
            <RateInput {...register(FORM_FIELDS.RATE)} />
          </Grid>
          <Grid item xs={6}>
            <RefundInput {...register(FORM_FIELDS.REFUND_PER_MONTH)} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Form.displayName = "Form";

export default Form;
