import { Box } from '@mui/material';
import Logo from './Logo';

function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Logo />
    </Box>
  );
}

export default Navbar;
