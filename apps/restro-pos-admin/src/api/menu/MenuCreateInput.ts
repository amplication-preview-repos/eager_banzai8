import { OrderCreateNestedManyWithoutMenusInput } from "./OrderCreateNestedManyWithoutMenusInput";

export type MenuCreateInput = {
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutMenusInput;
  price?: number | null;
  title?: string | null;
};
