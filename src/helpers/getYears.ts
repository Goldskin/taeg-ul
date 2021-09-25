import { UNIT_TIME } from "../organisms/Form/Form.types";

const YEAR_TIME = 364.25;

const getYears = (type: UNIT_TIME, totalTime: number) => {
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
export default getYears;
