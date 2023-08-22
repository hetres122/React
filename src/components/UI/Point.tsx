import { Link } from 'react-router-dom';

interface Props {
  src: string | undefined;
  title: string;
  to: string;
}

const Point: React.FC<Props> = ({ src, to, title }) => {
  return (
    <Link to={to}>
      <div className="overflow-hidden rounded-md">
        <img
          src={src}
          alt={title}
          className=" duration-400 block h-64 w-full transform-gpu rounded-md object-cover  transition-transform hover:scale-110"
        />
      </div>
      <p className="mt-3 h-12 align-middle text-xl text-gray-800">{title}</p>
    </Link>
  );
};

export default Point;
