import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  position?: SortOrder;
  salary?: SortOrder;
  updatedAt?: SortOrder;
};
