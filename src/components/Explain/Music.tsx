import { Box, Typography } from '@mui/material';

function Music() {
  return (
    <Box sx={{ width: '40%', m: '0 auto', textAlign: 'center' }}>
      <Box sx={{ border: '1px solid', height: '15rem' }}>image</Box>
      <Typography sx={{ mt: '2rem' }} variant="h4">
        Music
      </Typography>{' '}
      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        sint repellat est natus modi voluptas, impedit accusantium.
      </Typography>
    </Box>
  );
}

export default Music;
