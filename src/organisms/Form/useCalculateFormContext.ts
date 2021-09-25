import { useFormContext, UseFormReturn } from "react-hook-form";
import { FormValues } from "./Form.types";

const useCalculateFormContext = (): UseFormReturn<FormValues> => {
  return useFormContext<FormValues>();
};

export default useCalculateFormContext;
