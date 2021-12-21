import { Content } from 'carbon-components-react/lib/components/UIShell';
import Button from '../Button';
import './TimeSheet.scss';
import { AddAlt32, ChartColumn32, Document32 } from '@carbon/icons-react';

// type define = {
//   handler: any;
// };

const Timesheet = () => {
  const content = (
    <div className="bx--grid maindiv">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13 bx--col-md-5 bx--col-sm-3 Section">
          <h5>Timesheet Managment System</h5> <br />
          <p className="paragraph">
            TimeSheet managment system keep a track of hours you have spent on a particular project
            and helps generate reports for billing to the client
          </p>
          <br></br>
          <br></br>
          <div className="Button">
            <Button icon={<AddAlt32 />} title="ADD NEW" />
            <Button icon={<ChartColumn32 />} title="REPORTS" />
            <Button icon={<Document32 />} title="REVIEW" />
            {/* <Button handler2={props.handler} icon={<AddAlt32 />} title="ADD NEW" />
            <Button handler2={props.handler} icon={<ChartColumn32 />} title="REPORTS" />
            <Button handler2={props.handler} icon={<Document32 />} title="REVIEW" /> */}
          </div>
        </section>
      </div>
    </div>
  );

  return <Content id="main-content">{content}</Content>;
};

export default Timesheet;
