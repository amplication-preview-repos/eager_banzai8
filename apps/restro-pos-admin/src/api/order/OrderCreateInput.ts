import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  menu?: MenuWhereUniqueInput | null;
  orderDate?: Date | null;
  totalAmount?: number | null;
};
