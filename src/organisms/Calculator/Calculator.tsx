import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { useWatch } from "react-hook-form";
import {
  calculateTaeg,
  getDays,
  getMonths,
  getYears,
  numberWithSpaces,
} from "../../helpers";
import useCalculateFormContext from "../Form/useCalculateFormContext";
import { DataGrid } from "@mui/x-data-grid";
import { UNIT_TIME } from "../Form/Form.types";

const columns = [
  { field: "id", headerName: "Month", type: "number" },
  {
    field: "refund",
    headerName: "Refund €",
    // width: 150,
    type: "number",
  },
  {
    field: "total",
    headerName: "Total €",
    // width: 150,
    type: "number",
  },
];

const Calculator: FunctionComponent = () => {
  const { control } = useCalculateFormContext();
  const values = useWatch({ control });

  const totalToBorrow = Number(values.amountToBorrow || 0);
  const typeTime = values.unitTime || UNIT_TIME.YEAR;

  const totalTime = Number(values.borrowedTime || 0);
  const totalYears = getYears(typeTime, totalTime);
  const totalMonths = getMonths(typeTime, totalTime);
  const totalDays = getDays(typeTime, totalTime);

  const refund = Number(values.refound || 0);
  const refundType = values.borrowType || UNIT_TIME.MONTH;

  const totalToRefund =
    (refundType === UNIT_TIME.MONTH ? totalMonths : 1) * refund;

  // const rows = Array(totalMonths)
  //   .fill(null)
  //   .map((_, index) => {
  //     const refundSoFar = (index + 1) * refund;
  //     return {
  //       refund: numberWithSpaces(refund),
  //       total: numberWithSpaces(refundSoFar),
  //       id: index + 1,
  //     };
  //   });

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={4}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack>
                <Typography fontWeight={700}>Years</Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(Number(totalYears.toFixed(1)))}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack>
                <Typography fontWeight={700}>Months</Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(totalMonths)}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack>
                <Typography fontWeight={700}>Days</Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(Math.floor(totalDays))}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack>
                <Typography fontWeight={700}>Total refund</Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(totalToRefund)}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack>
                <Typography fontWeight={700}>TAEG</Typography>
                <Typography variant="body2" color="text.secondary">
                  {calculateTaeg({
                    totalToBorrow,
                    totalToRefund,
                    totalYears,
                  }).toFixed(4)}
                  %
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
      {/* <Card sx={{ marginTop: 4 }}>
        <CardContent>
          <div style={{ height: 300 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={100}
              rowsPerPageOptions={[100]}
            />
          </div>
        </CardContent>
      </Card> */}
    </>
  );
};

Calculator.displayName = "Calculator";

export default Calculator;
