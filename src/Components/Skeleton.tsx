import React from 'react';
import { DataTableSkeleton } from 'carbon-components-react';

function Skeleton() {
  return (
    <div>
      <DataTableSkeleton columnCount={8} rowCount={6} />
    </div>
  );
}
export default Skeleton;
