export enum FORM_FIELDS {
  AMOUNT_TO_BORROW = "amountToBorrow",
  BORROWED_TIME = "borrowedTime",
  RATE = "rate",
  REFUND_PER_MONTH = "refundPerMonth",
}

export interface FormValues {
  [FORM_FIELDS.AMOUNT_TO_BORROW]: number;
  [FORM_FIELDS.BORROWED_TIME]: number;
  [FORM_FIELDS.RATE]: number;
  [FORM_FIELDS.REFUND_PER_MONTH]: number;
}
