import { OrderUpdateManyWithoutEmployeesInput } from "./OrderUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutEmployeesInput;
  position?: string | null;
  salary?: number | null;
};
