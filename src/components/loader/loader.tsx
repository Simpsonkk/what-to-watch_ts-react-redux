import { CSSProperties } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

function Loader(): JSX.Element {
  const spinnerStyles: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  return <PacmanLoader cssOverride={spinnerStyles} loading color="#d6b91e" size={100} />;
}

export default Loader;
