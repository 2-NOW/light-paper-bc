import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const timelines = ['Gallery', 'Community', 'Music', 'Painting', 'Market'];

function index() {
  return (
    <Box sx={{ mt: '20rem' }}>
      <Timeline position="alternate">
        {timelines.map((timeline, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{timeline}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default index;
