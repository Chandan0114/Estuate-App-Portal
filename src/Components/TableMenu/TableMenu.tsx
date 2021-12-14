import React from 'react';
import { Checkbox } from 'carbon-components-react';
import './TableMenu.scss';
import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink
} from 'carbon-components-react/lib/components/UIShell';

const Fade16 = () => <Checkbox labelText="" id="checked-2" />;

function TableMenu() {
  return (
    <div>
      <SideNav aria-label="Side navigation" className="bx--side-nav1">
        <SideNavItems className="bx--side-nav__items">
          <SideNavMenu title="Add New">
            <SideNavMenuItem>Weekly</SideNavMenuItem>

            <SideNavMenuItem>Daily</SideNavMenuItem>
          </SideNavMenu>

          <SideNavLink renderIcon={Fade16}>Report</SideNavLink>
          <SideNavLink renderIcon={Fade16}>Review</SideNavLink>
        </SideNavItems>
      </SideNav>
    </div>
  );
}
export default TableMenu;
