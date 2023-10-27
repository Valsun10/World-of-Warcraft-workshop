import { format } from "date-fns";

const GroupedColumns = [
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
];

export default GroupedColumns;
