import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  menu?: MenuWhereUniqueInput;
  orderDate?: DateTimeNullableFilter;
  totalAmount?: FloatNullableFilter;
};
