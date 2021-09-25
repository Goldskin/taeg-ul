import { UNIT_TIME } from "../organisms/Form/Form.types";

const YEAR_TIME = 364.25;

const getMonths = (type: UNIT_TIME, totalTime: number) => {
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
export default getMonths;
