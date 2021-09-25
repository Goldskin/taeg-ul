import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { useWatch } from "react-hook-form";
import { numberWithSpaces } from "../../helpers";
import useCalculateFormContext from "../Form/useCalculateFormContext";
import { DataGrid } from "@mui/x-data-grid";
import { UNIT_TIME } from "../Form/Form.types";

const YEAR_TIME = 364.25;

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

const caculateTaeg = ({
  totalToBorrow,
  totalToRefund,
  totalYears,
}: {
  totalToBorrow: number;
  totalToRefund: number;
  totalYears: number;
}) => {
  const subRate = totalToRefund / totalToBorrow;

  const result = Math.pow(subRate, 1 / totalYears);

  console.log({ subRate, totalYears, result });

  return !Number.isNaN(result) && Number.isFinite(result) ? result - 1 : 0;
};

const getMultiplierForMonth = (type: UNIT_TIME, totalTime: number) => {
  switch (type) {
    case UNIT_TIME.YEAR:
      return Math.ceil(totalTime * 12);
    case UNIT_TIME.DAY:
      return Math.ceil((totalTime / YEAR_TIME) * 12);
    case UNIT_TIME.MONTH:
      return totalTime;
    default:
      return 0;
  }
};
const getMultiplierForDay = (type: UNIT_TIME, totalTime: number) => {
  switch (type) {
    case UNIT_TIME.YEAR:
      return Math.ceil(totalTime * YEAR_TIME);
    case UNIT_TIME.DAY:
      return totalTime;
    case UNIT_TIME.MONTH:
      return Math.ceil((YEAR_TIME / 12) * totalTime);
    default:
      return 0;
  }
};
const getMultiplierForYear = (type: UNIT_TIME, totalTime: number) => {
  switch (type) {
    case UNIT_TIME.YEAR:
      return totalTime;
    case UNIT_TIME.DAY:
      return totalTime / YEAR_TIME;
    case UNIT_TIME.MONTH:
      return totalTime / 12;
    default:
      return 0;
  }
};

const Calculator: FunctionComponent = () => {
  const { control } = useCalculateFormContext();
  const values = useWatch({ control });

  const totalToBorrow = Number(values.amountToBorrow || 0);
  const typeTime = values.unitTime || UNIT_TIME.YEAR;

  const totalTime = Number(values.borrowedTime || 0);
  const totalYears = getMultiplierForYear(typeTime, totalTime);
  const totalMonths = getMultiplierForMonth(typeTime, totalTime);
  const totalDays = getMultiplierForDay(typeTime, totalTime);

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
                  {caculateTaeg({
                    totalToBorrow,
                    totalToRefund,
                    totalYears,
                  }).toFixed(4)}{" "}
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
