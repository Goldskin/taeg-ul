const calculateTaeg = ({
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

  return !Number.isNaN(result) && Number.isFinite(result) ? result - 1 : 0;
};

export default calculateTaeg;
