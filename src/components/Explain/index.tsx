import { Box, Grid } from '@mui/material';
import Gallery from './Gallery';
import Community from './Community';
import Music from './Music';
import Painting from './Painting';

const wrapper = {
  mt: '20rem',
};

function index() {
  return (
    <Box sx={wrapper}>
      <Grid container rowSpacing={12}>
        <Grid item xs={12} lg={6}>
          <Gallery />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Community />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Music />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Painting />
        </Grid>
      </Grid>
    </Box>
  );
}

export default index;
