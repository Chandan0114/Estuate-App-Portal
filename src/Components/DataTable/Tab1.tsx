import { Tabs, Tab } from 'carbon-components-react';
import DataTable1 from '.';
import './Tab1.scss';

const Tab1 = () => {
  return (
    <div className="bx--grid Tabdiv">
      <div className="bx--row ">
        <div className="bx--offset-lg-3 bx--col-lg-13 bx--col-md-5 bx--col-sm-3 ">
          <Tabs type="container">
            <Tab id="tab-1" label="Tab label 1">
              <p>Content for first tab goes here.</p>
            </Tab>
            <Tab id="tab-2" label="Tab label 2">
              <DataTable1 />
            </Tab>
            <Tab
              id="tab-3"
              label="Tab label 3 shows truncation"
              title="Tab label 3 shows truncation">
              <p>Content for third tab goes here.</p>
            </Tab>
            <Tab label={<div>Custom Label</div>}>
              <p>Content for fourth tab goes here.</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
