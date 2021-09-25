import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FunctionComponent } from "react";
import { Controller, useWatch } from "react-hook-form";
import { capitalize } from "../../helpers";
import { MoneyInput, RateInput, RefundInput, TimeInput } from "../../molecules";

import { FORM_FIELDS, TIME_TYPE } from "./Form.types";
import useCalculateFormContext from "./useCalculateFormContext";

const Form: FunctionComponent = () => {
  const { register, control } = useCalculateFormContext();
  const typeTime = useWatch({
    control,
    name: FORM_FIELDS.TYPE_TIME,
  });

  return (
    <>
      <Card sx={{ marginTop: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="select-time-type">type de temps</InputLabel>
                <Controller
                  control={control}
                  name={FORM_FIELDS.TYPE_TIME}
                  render={({ field }) => {
                    return (
                      <Select
                        {...field}
                        fullWidth
                        labelId="select-time-type"
                        label="type de temps"
                      >
                        {Object.values(TIME_TYPE).map((val) => (
                          <MenuItem key={val} value={val}>
                            {capitalize(val)}
                          </MenuItem>
                        ))}
                      </Select>
                    );
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TimeInput
                {...register(FORM_FIELDS.BORROWED_TIME, { maxLength: 2 })}
                suffix={typeTime}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ marginTop: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <MoneyInput
                {...register(FORM_FIELDS.AMOUNT_TO_BORROW)}
                autoFocus
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <RateInput {...register(FORM_FIELDS.RATE)} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <RefundInput {...register(FORM_FIELDS.REFUND_PER_MONTH)} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

Form.displayName = "Form";

export default Form;
