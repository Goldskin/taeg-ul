import { Card, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { useWatch } from "react-hook-form";
import { numberWithSpaces } from "../../helpers";
import useCalculateFormContext from "../Form/useCalculateFormContext";

const YEAR_TIME = 364.25;

const Calculator: FunctionComponent = () => {
  const { control } = useCalculateFormContext();
  const values = useWatch({ control });
  console.log(values);

  const totalMonths = (values.borrowedTime || 0) * 12;
  const totalDays = (values.borrowedTime || 0) * YEAR_TIME;
  const totalRefund = totalMonths * (values.refundPerMonth || 0);

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={6} sx={{ marginTop: 2 }}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack spacing={0.5}>
                <Typography fontWeight={700}>Month</Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(totalMonths)}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: 2 }}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack spacing={0.5}>
                <Typography fontWeight={700}>Days</Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(Math.floor(totalDays))}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: 2 }}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack spacing={0.5}>
                <Typography fontWeight={700}>Total remboursement</Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(totalRefund)}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

Calculator.displayName = "Calculator";

export default Calculator;
