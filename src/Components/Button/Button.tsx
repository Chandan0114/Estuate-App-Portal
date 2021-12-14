import { Link } from 'react-router-dom';
import './Button.scss';

type define = {
  title: string;
  icon: any;
};

const Button = (props: define) => {
  return (
    <>
      <Link to="/table">
        <button className="button">
          <span className="icon">{props.icon}</span>
          <span className="title">{props.title}</span>
        </button>
      </Link>
    </>
  );
};

export default Button;
