import React from "react";
import { useTable, Row, HeaderGroup, ColumnInstance, Column } from "react-table";
import "./Table.css";

interface TableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
  expandedRowIndex?: number | null;
  expandedRowContent?: (row: Row<T>) => React.ReactNode;
}

const Table = <T extends object>({ data, columns, expandedRowIndex, expandedRowContent }: TableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      className="min-w-full shadow-md shadow-gray-300"
    >
      <thead>
        {headerGroups.map((headerGroup: HeaderGroup<T>) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={headerGroup.id}
            className="tr__head text-white uppercase tracking-wider"
          >
            {headerGroup.headers.map((column: ColumnInstance<T>, columnIndex: number) => (
              <th
                {...column.getHeaderProps()}
                key={column.id}
                className={`px-12 cursor-pointer ${columnIndex === 0 ? 'rounded-tl-lg' : ''} ${columnIndex === headerGroup.headers.length - 1 ? 'rounded-tr-lg' : ''}`}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className="bg-white divide-y-2 divide-gray-300"
      >
        {rows.map((row: Row<T>, rowIndex: number) => {
          prepareRow(row);
          const isRowExpanded = rowIndex === expandedRowIndex;

          return (
            <React.Fragment key={row.id}>
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className="px-12 whitespace-nowrap"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
              {isRowExpanded && expandedRowContent ? (
                <tr>
                  <td colSpan={columns.length}>
                    {expandedRowContent(row)}
                  </td>
                </tr>
              ) : null}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
