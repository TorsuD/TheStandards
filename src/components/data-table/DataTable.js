import React from "react";
import MUIDataTable from "mui-datatables";

function DataTable({ title, data, columns, rowsPerPage }) {
  const options = {
    filterType: "checkbox",
    rowsPerPage: rowsPerPage, // rows to display per page
  };
  return (
    <div>
      <MUIDataTable
        title={title}
        data={data} // example: ["James Houston", "Test Corp", "Dallas", "TX"],
        columns={columns} // example: ["Name", "Company", "City", "State"]
        options={options}
      />
    </div>
  );
}

export default DataTable;
