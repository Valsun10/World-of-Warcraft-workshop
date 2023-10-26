import React, { useEffect, useMemo, useState } from "react";
import "./TableUsersPage.css";
import Wrapper from "../Wrapper/Wrapper";
import { useSortBy, useTable } from "react-table";
import { format } from "date-fns";
import { IoArrowDownSharp } from "react-icons/io5";
import { IoArrowUpOutline } from "react-icons/io5";

import authService from "../../services/AuthService";

const TableUsersPage = () => {
  const [users, setUsers] = useState([]);
  const data = useMemo(() => users, [users]);
  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "_id",
      },
      {
        Header: "User Info",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "E-mail",
            accessor: "email",
          },
        ],
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Dates",
        columns: [
          {
            Header: "Created on",
            accessor: "createdAt",
            Cell: ({ value }) => {
              return format(new Date(value), "dd/MM/yyyy");
            },
          },
          {
            Header: "Updated on",
            accessor: "updatedAt",
            Cell: ({ value }) => {
              return format(new Date(value), "dd/MM/yyyy");
            },
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    authService.GetAllUsers().then((data) => setUsers(data));
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  console.log(headerGroups);
  console.log(rows);
  console.log(users);

  return (
    <Wrapper>
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
          {rows.map((row) => {
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
    </Wrapper>
  );
};

export default TableUsersPage;
