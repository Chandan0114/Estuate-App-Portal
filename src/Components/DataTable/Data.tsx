import { Edit16, TrashCan16 } from '@carbon/icons-react';
import { Dropdown, RadioButton } from 'carbon-components-react';

const items = [
  {
    label: 'Bench'
  },
  {
    label: 'Option 2'
  },
  {
    label: 'Option 3'
  },
  {
    label: 'Option 4'
  }
];

export const headerdata = [
  {
    key: 'name',
    header: 'Action'
  },
  {
    key: 'createdAt',
    header: 'Project'
  },
  {
    key: 'updatedAt',
    header: 'Activity'
  },
  {
    key: 'issueCount',
    header: 'Approver'
  },
  {
    key: 'stars',
    header: 'Billable'
  },
  {
    key: 'status',
    header: 'Status'
  },
  {
    key: 'Monday',
    header: 'Mon'
  },
  {
    key: 'Tuesday',
    header: 'Tue'
  },
  {
    key: 'Wednesday',
    header: 'Wed'
  },
  {
    key: 'Th',
    header: 'Thu'
  },
  {
    key: 'Fr',
    header: 'Friday'
  },
  {
    key: 'Sat',
    header: 'Sat'
  }
];

export const rowData = [
  {
    id: '1',
    name: (
      <div>
        <Edit16 />
        <TrashCan16 />
      </div>
    ),
    createdAt: <Dropdown id="" items={items} label="Select project" />,
    updatedAt: <Dropdown id="" items={items} label="Training" />,
    issueCount: <Dropdown id="" items={items} label="Select Approval" />,
    stars: (
      <div style={{ display: 'flex' }}>
        <RadioButton labelText="Y" id=" radio1"></RadioButton>
        <RadioButton labelText="N" id=" radio2"></RadioButton>
      </div>
    ),
    status: 'Done',
    Monday: '09:00'
  }
];
