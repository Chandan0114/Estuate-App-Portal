import React from 'react';
// import Skeleton from './Skeleton';
import { Link } from 'react-router-dom';
import { DataTableSkeleton } from 'carbon-components-react';
import './DataTable.scss';
import TableMenu from '../TableMenu/TableMenu';

function DataTable() {
  return (
    <div className="bx--grid maindiv1">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13 bx--col-md-5 bx--col-sm-3">
          <h4 style={{ marginTop: '85px' }}>TimeSheet Managment system</h4>
          <br />

          <p className="pannel">Side Pannel</p>

          <DataTableSkeleton columnCount={8} rowCount={6} />
          <TableMenu />
          <Link to="/">Go to home page</Link>
        </div>
      </div>
    </div>
  );
}
export default DataTable;
