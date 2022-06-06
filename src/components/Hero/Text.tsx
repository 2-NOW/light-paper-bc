import { Box, Typography } from '@mui/material';

function Text() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5">Introducing</Typography>
      <Typography variant="h2">Block Changer</Typography>
    </Box>
  );
}

export default Text;
