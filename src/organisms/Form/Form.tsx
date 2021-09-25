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

import { BORROW_TYPE, FORM_FIELDS, UNIT_TIME } from "./Form.types";
import useCalculateFormContext from "./useCalculateFormContext";

const Form: FunctionComponent = () => {
  const { register, control } = useCalculateFormContext();
  const unitType = useWatch({
    control,
    name: FORM_FIELDS.UNIT_TIME,
  });
  const borrowTime = useWatch({
    control,
    name: FORM_FIELDS.BORROW_TYPE,
  });

  return (
    <>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="select-time-type">Type de temps</InputLabel>
                <Controller
                  control={control}
                  name={FORM_FIELDS.UNIT_TIME}
                  render={({ field }) => (
                    <Select
                      {...field}
                      fullWidth
                      labelId="select-time-type"
                      label="Type de temps"
                    >
                      {Object.values(UNIT_TIME).map((val) => (
                        <MenuItem key={val} value={val}>
                          {capitalize(val)}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TimeInput
                {...register(FORM_FIELDS.BORROWED_TIME, { maxLength: 2 })}
                suffix={unitType}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ marginTop: 2 }}>
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
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="select-time-type">
                  Type de remboursement
                </InputLabel>
                <Controller
                  control={control}
                  name={FORM_FIELDS.BORROW_TYPE}
                  render={({ field }) => (
                    <Select
                      {...field}
                      fullWidth
                      labelId="select-borrow-type"
                      label="Type de remboursement"
                    >
                      {Object.values(BORROW_TYPE).map((val) => (
                        <MenuItem key={val} value={val}>
                          {capitalize(val)}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <RefundInput
                {...register(FORM_FIELDS.REFUND_PER_MONTH)}
                label={capitalize(borrowTime)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

Form.displayName = "Form";

export default Form;
