import { GetProp, TableProps } from "antd";
import { SorterResult } from "antd/es/table/interface";

export interface User {
  name: string;
}

export interface DataType {
  key: React.Key;
  name: string;
  category: string;
  connector: string;
  connectedUsers: User[];
  lastClassification: string;
}

export type ColumnsType<T extends object = object> = TableProps<T>["columns"];
export type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

export interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>["field"];
  sortOrder?: SorterResult<any>["order"];
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

export interface SlideInDetailsProps {
  data: DataType;
}
