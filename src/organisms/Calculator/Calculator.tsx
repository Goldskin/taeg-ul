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

interface Row {
  taeg: number;
  left: number;
  amountToRefund: number;
  refounded: number;
  id: number;
}

const columns = [
  {
    field: "refounded",
    headerName: "Refunded €",
    width: 120,
    type: "number",
  },
  {
    field: "left",
    headerName: "Left €",
    type: "number",
  },
  {
    field: "taeg",
    headerName: "TAEG €",
    type: "number",
  },
  {
    field: "amountToRefund",
    headerName: "Refund/year",
    width: 120,
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
  const refundPerMonth = totalToBorrow / totalMonths;
  const refundPerYear = refundPerMonth * 12;
  const refundPerMonthWithTaeg = totalToRefund / totalMonths;
  const refundPerYearWithTaeg = refundPerMonthWithTaeg * 12;

  const taeg = calculateTaeg({
    totalToBorrow,
    totalToRefund,
    totalYears,
  });

  const { rows } = Array(Math.ceil(totalYears))
    .fill(null)
    .reduce<{ left: number; leftWithTaeg: number; rows: Row[] }>(
      (acc, _, index) => {
        const rapport = totalToRefund / totalToBorrow; // 1.2 // 0.2
        const taeg = acc.left * (rapport - 1);

        return {
          leftWithTaeg: acc.leftWithTaeg - refundPerYearWithTaeg || 0,
          left: acc.left - refundPerYear || 0,
          rows: [
            ...acc.rows,
            {
              taeg: taeg,
              left: acc.leftWithTaeg,
              amountToRefund: refundPerYearWithTaeg - taeg,
              refounded: totalToRefund - acc.leftWithTaeg,
              id: index,
            },
          ],
        };
      },
      { leftWithTaeg: totalToRefund, left: totalToBorrow, rows: [] }
    );

  // const test = rows.reduce(
  //   (acc, row) => ({
  //     taeg: row.taeg + acc.taeg,
  //     refounded: row.refounded + acc.refounded,
  //   }),
  //   { taeg: 0, refounded: 0 }
  // );

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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack>
                <Typography fontWeight={700}>Refund per month</Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(Number(refundPerMonthWithTaeg.toFixed(2)))}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack>
                <Typography fontWeight={700}>TAEG</Typography>
                <Typography variant="body2" color="text.secondary">
                  {taeg.toFixed(4)}%
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{ marginTop: 4 }}>
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
      </Card>
    </>
  );
};

Calculator.displayName = "Calculator";

export default Calculator;
