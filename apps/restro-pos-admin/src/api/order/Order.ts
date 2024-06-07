import { Customer } from "../customer/Customer";
import { Employee } from "../employee/Employee";
import { Menu } from "../menu/Menu";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  employee?: Employee | null;
  id: string;
  menu?: Menu | null;
  orderDate: Date | null;
  totalAmount: number | null;
  updatedAt: Date;
};
