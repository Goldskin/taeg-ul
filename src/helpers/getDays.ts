import { UNIT_TIME } from "../organisms/Form/Form.types";

const YEAR_TIME = 364.25;

const getDays = (type: UNIT_TIME, totalTime: number) => {
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
export default getDays;
