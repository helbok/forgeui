import React from "react";
import { cn } from "../utils/cn";

export interface Column<T> {
  key: string;
  header: React.ReactNode;
  render?: (row: T) => React.ReactNode;
  align?: "left" | "right" | "center";
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number;
  emptyMessage?: React.ReactNode;
}

export function Table<T>({
  data,
  columns,
  rowKey,
  emptyMessage = "No rows to display.",
}: TableProps<T>) {
  return (
    <table className="fui-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} style={{ textAlign: column.align ?? "left" }}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>{emptyMessage}</td>
          </tr>
        ) : (
          data.map((row) => (
            <tr key={rowKey(row)}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  style={{ textAlign: column.align ?? "left" }}
                  className={cn()}
                >
                  {column.render
                    ? column.render(row)
                    : String((row as Record<string, unknown>)[column.key])}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

Table.displayName = "Table";
