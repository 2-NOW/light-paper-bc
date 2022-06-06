import { Box } from '@mui/material';

import Image from './Image';
import Text from './Text';

function index() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20rem' }}>
      <Image />
      <Text />
    </Box>
  );
}

export default index;
