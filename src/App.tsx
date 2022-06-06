import { Box } from '@mui/material';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Vision from './components/Vision';
import Explain from './components/Explain';
import Stepper from './components/Stepper';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Footer from './components/Footer';

const wrapper = {
  m: '0 auto',
  width: '70vw',
};

function App() {
  return (
    <Box sx={wrapper}>
      <Navbar />
      <Hero />
      <Vision />
      <Explain />
      <Stepper />
      <Timeline />
      <Team />
      <Footer />
    </Box>
  );
}

export default App;
