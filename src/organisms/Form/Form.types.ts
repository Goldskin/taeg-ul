export enum FORM_FIELDS {
  AMOUNT_TO_BORROW = "amountToBorrow",
  TYPE_TIME = "typeTime",
  BORROWED_TIME = "borrowedTime",
  RATE = "rate",
  REFUND_PER_MONTH = "refundPerMonth",
}
export enum TIME_TYPE {
  YEAR = "year",
  MONTH = "month",
}

export interface FormValues {
  [FORM_FIELDS.TYPE_TIME]: TIME_TYPE;
  [FORM_FIELDS.AMOUNT_TO_BORROW]: number;
  [FORM_FIELDS.BORROWED_TIME]: number;
  [FORM_FIELDS.RATE]: number;
  [FORM_FIELDS.REFUND_PER_MONTH]: number;
}
