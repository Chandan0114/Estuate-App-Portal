import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import Timesheet from '../TimeSheet';
import { Routes, Route } from 'react-router-dom';
// import DataTable1 from '../DataTable';
import MyImage from '../MyImage.png';
import './HeaderMenu.scss';

import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem
} from 'carbon-components-react/lib/components/UIShell';
// import Tab1 from '../DataTable/Tab1';
import DataTable1 from '../DataTable';

// import { useState } from 'react';
// import Skeleton from '../Skeleton';

const Fade16 = () => (
  <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
);

const HeaderMenu = () => {
  // const [loading, setloading] = useState(true);

  // function delay() {
  //   setloading(false);
  // }
  return (
    <div className="container">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name" className="bx--header">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="ESTUATE EMPLOYEE MANAGMENT SYSTEM">
                [EEMS]
              </HeaderName>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                  <p className="Inc">Inc</p>
                </HeaderGlobalAction>
              </HeaderGlobalBar>

              <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                <div>
                  <div>
                    <img className="Image" src={MyImage} alt=""></img>

                    <h5 className="ImgHeader">
                      Chandan Kumar <p>EST-5595</p>
                    </h5>
                  </div>
                </div>
                <SideNavItems className="sideNav">
                  <SideNavMenu renderIcon={Fade16} title="TimeSheets">
                    <SideNavMenuItem>Daily Entry</SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu renderIcon={Fade16} title="Recruitment">
                    <SideNavMenuItem>Fresher</SideNavMenuItem>
                  </SideNavMenu>
                </SideNavItems>
              </SideNav>
            </Header>
            <Routes>
              <Route path="/" element={<Timesheet />} />
              {/* <Route path="/table" element={<Tab1 />} /> */}
              <Route path="/table" element={<DataTable1 />} />
            </Routes>

            {/* <Routes>
              <Route path="/" element={<Timesheet handler={delay} />} />
              {loading ? (
                <Route path="/table" element={<Skeleton />} />
              ) : (
                <Route path="/table" element={<DataTable1 />} />
              )}
            </Routes> */}
          </>
        )}
      />
    </div>
  );
};

export default HeaderMenu;
