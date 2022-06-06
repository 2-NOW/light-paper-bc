import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function Logo() {
  return (
    <Link to="/">
      <Typography sx={{ mt: '2rem' }} variant="h5">
        Block Changer
      </Typography>
    </Link>
  );
}

export default Logo;
