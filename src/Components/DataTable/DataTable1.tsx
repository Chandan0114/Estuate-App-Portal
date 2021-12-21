import React from 'react';
import { Link } from 'react-router-dom';
import './DataTable.scss';

import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell

  // TableExpandedRow
} from 'carbon-components-react';
import { rowData, headerdata } from './Data';

function DataTable1() {
  return (
    <div className="bx--grid maindiv1">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13 bx--col-md-5 bx--col-sm-3">
          <h4 style={{ marginTop: '85px' }}>TimeSheet</h4>
          <br />

          <DataTable
            rows={rowData}
            headers={headerdata}
            render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
              <TableContainer>
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow>
                      <TableExpandHeader />

                      {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {rows.map((row) => (
                      <React.Fragment key={row.id}>
                        <TableExpandRow {...getRowProps({ row })}>
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableExpandRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          />

          <br />
          <br />

          {/* <TableMenu /> */}
          <Link to="/">Go to home page</Link>
        </div>
      </div>
    </div>
  );
}
export default DataTable1;
