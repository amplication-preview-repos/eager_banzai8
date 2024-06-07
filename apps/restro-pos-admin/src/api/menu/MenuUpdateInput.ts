import { OrderUpdateManyWithoutMenusInput } from "./OrderUpdateManyWithoutMenusInput";

export type MenuUpdateInput = {
  description?: string | null;
  orders?: OrderUpdateManyWithoutMenusInput;
  price?: number | null;
  title?: string | null;
};
