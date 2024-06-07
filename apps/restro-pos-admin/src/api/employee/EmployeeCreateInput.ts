import { OrderCreateNestedManyWithoutEmployeesInput } from "./OrderCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutEmployeesInput;
  position?: string | null;
  salary?: number | null;
};
