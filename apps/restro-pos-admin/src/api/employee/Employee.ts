import { Order } from "../order/Order";

export type Employee = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  position: string | null;
  salary: number | null;
  updatedAt: Date;
};
