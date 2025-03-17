import React, { useState } from "react";
import { cn } from "../utils/cn";

export interface Column<T> {
  key: string;
  header: React.ReactNode;
  render?: (row: T) => React.ReactNode;
  align?: "left" | "right" | "center";
  sortable?: boolean;
  sortValue?: (row: T) => string | number;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number;
  emptyMessage?: React.ReactNode;
}

type SortState<T> = { key: string; direction: "asc" | "desc" } | null;

export function Table<T>({
  data,
  columns,
  rowKey,
  emptyMessage = "No rows to display.",
}: TableProps<T>) {
  const [sort, setSort] = useState<SortState<T>>(null);

  const rows = React.useMemo(() => {
    if (sort == null) {
      return data;
    }
    const column = columns.find((c) => c.key === sort.key);
    if (column?.sortValue == null) {
      return data;
    }
    const sorted = [...data].sort((a, b) => {
      const left = column.sortValue!(a);
      const right = column.sortValue!(b);
      if (left < right) return sort.direction === "asc" ? -1 : 1;
      if (left > right) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, columns, sort]);

  const toggleSort = (column: Column<T>) => {
    if (!column.sortable || column.sortValue == null) return;
    setSort((prev) =>
      prev?.key === column.key
        ? { key: column.key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key: column.key, direction: "asc" },
    );
  };

  return (
    <table className="fui-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} style={{ textAlign: column.align ?? "left" }}>
              <button
                type="button"
                className={cn("fui-table__header", column.sortable && "fui-table__header--sortable")}
                disabled={!column.sortable}
                onClick={() => toggleSort(column)}
              >
                {column.header}
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>{emptyMessage}</td>
          </tr>
        ) : (
          rows.map((row) => (
            <tr key={rowKey(row)}>
              {columns.map((column) => (
                <td key={column.key} style={{ textAlign: column.align ?? "left" }}>
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
