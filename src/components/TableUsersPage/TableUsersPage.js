import React, { useEffect, useMemo, useState } from "react";
import "./TableUsersPage.css";
import Wrapper from "../Wrapper/Wrapper";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { IoArrowDownSharp } from "react-icons/io5";
import { IoArrowUpOutline } from "react-icons/io5";
import GroupedColumns from "./columns";

import authService from "../../services/AuthService";
import GlobalFilter from "./GlobalFilter";

const TableUsersPage = () => {
  const [users, setUsers] = useState([]);
  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => GroupedColumns, []);

  useEffect(() => {
    authService.GetAllUsers().then((data) => setUsers(data));
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex, pageSize, globalFilter },
    pageOptions,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 3 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Wrapper>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <IoArrowUpOutline />
                      ) : (
                        <IoArrowDownSharp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-nav">
        <span>
          {pageIndex + 1} of <strong>{pageOptions.length}</strong>
        </span>
        <button
          className="pagination-btn"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="pagination-btn"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
};

export default TableUsersPage;
