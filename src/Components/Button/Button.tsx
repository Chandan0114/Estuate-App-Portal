import { Link } from 'react-router-dom';
import './Button.scss';

type define = {
  title: string;
  // handler2: any;
  icon: any;
};

const Button = (props: define) => {
  // let change = (handler2: any) => {
  //   setTimeout(() => {
  //     handler2();
  //   }, 2000);
  // };
  return (
    <>
      <Link to="/table">
        {/* <button className="button" onClick={() => change(props.handler2)}> */}
        <button className="button">
          <span className="icon">{props.icon}</span>
          <span className="title">{props.title}</span>
        </button>
      </Link>
    </>
  );
};

export default Button;
