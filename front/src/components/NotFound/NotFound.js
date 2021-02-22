import './NotFound.css'
import { Link } from 'react-router-dom';

export const NotFound = () => {

  return (
  <>
    <h1 id='notfound'>You've gone to deep in space! <Link to="/"><img src='/portalgun.png'/></Link></h1></>
  );
}

