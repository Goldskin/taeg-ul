export enum FORM_FIELDS {
  AMOUNT_TO_BORROW = "amountToBorrow",
  UNIT_TIME = "unitTime",
  BORROW_TYPE = "borrowType",
  BORROWED_TIME = "borrowedTime",
  RATE = "rate",
  REFUND = "refound",
}

export enum UNIT_TIME {
  YEAR = "year",
  MONTH = "month",
  DAY = "day",
}

export enum BORROW_TYPE {
  TOTAL = "total",
  MONTH = "month",
}

export interface FormValues {
  [FORM_FIELDS.UNIT_TIME]: UNIT_TIME;
  [FORM_FIELDS.AMOUNT_TO_BORROW]: number;
  [FORM_FIELDS.BORROW_TYPE]: BORROW_TYPE;
  [FORM_FIELDS.BORROWED_TIME]: number;
  [FORM_FIELDS.RATE]: number;
  [FORM_FIELDS.REFUND]: number;
}
