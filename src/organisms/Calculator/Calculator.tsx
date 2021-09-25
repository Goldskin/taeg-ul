import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { useWatch } from "react-hook-form";
import { numberWithSpaces } from "../../helpers";
import useCalculateFormContext from "../Form/useCalculateFormContext";
import { DataGrid } from "@mui/x-data-grid";
import { TIME_TYPE } from "../Form/Form.types";

const YEAR_TIME = 364.25;

const columns = [
  { field: "id", headerName: "Month", width: 90, type: "number" },
  {
    field: "refund",
    headerName: "Refund €",
    width: 150,
    type: "number",
  },
  {
    field: "total",
    headerName: "Total €",
    width: 150,
    type: "number",
  },
  {
    field: "test",
    headerName: "test",
    width: 150,
    type: "number",
  },
];

const caculTaeg = ({
  totalToBorrow,
  totalRefund,
  totalYears,
}: {
  totalToBorrow: number;
  totalRefund: number;
  totalYears: number;
}) => {
  const subRate = totalRefund / totalToBorrow;

  const result = Math.pow(subRate, 1 / totalYears);

  return !Number.isNaN(result) && Number.isFinite(result) ? result : 0;
};

const Calculator: FunctionComponent = () => {
  const { control } = useCalculateFormContext();
  const values = useWatch({ control });
  console.log(values);

  const refundPerMonth = Number(values.refundPerMonth || 0);
  const totalToBorrow = Number(values.amountToBorrow || 0);
  const typeTime = values.typeTime || TIME_TYPE.YEAR;

  const totalTime = Number(values.borrowedTime || 0);
  const totalMonths = totalTime * (typeTime === TIME_TYPE.YEAR ? 12 : 1);
  const totalDays = (YEAR_TIME / 12) * totalMonths;
  const totalYears = totalDays / YEAR_TIME;
  const totalRefund = totalMonths * refundPerMonth;

  const rows = Array(totalMonths)
    .fill(null)
    .map((_, index) => {
      const refundSoFar = (index + 1) * refundPerMonth;
      return {
        refund: numberWithSpaces(refundPerMonth),
        total: numberWithSpaces(refundSoFar),
        id: index + 1,
      };
    });

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
                <Typography fontWeight={700}>
                  Total remboursement hors taeg
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {numberWithSpaces(totalRefund)}
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: 2 }}>
          <Card>
            <Box sx={{ p: 2, display: "flex" }}>
              <Stack spacing={0.5}>
                <Typography fontWeight={700}>taeg</Typography>
                <Typography variant="body2" color="text.secondary">
                  {caculTaeg({
                    totalToBorrow,
                    totalRefund,
                    totalYears,
                  }).toFixed(4)}{" "}
                  %
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
