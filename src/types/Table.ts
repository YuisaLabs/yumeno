import { Column } from "./Column";

export interface Table {
  id: string;
  name: string;
  columns: Column[];
}