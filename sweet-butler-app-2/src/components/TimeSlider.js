import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value} min`;
}

const marks = [
  {
    value: 60,
    label: '1 Hour',
  },
  {
    value: 120,
    label: '2 Hours',
  },
  {
    value: 180,
    label: '3 Hours',
  },
  {
    value: 240,
    label: '4 Hours',
  },
  {
    value: 300,
    label: '5 Hours',
  },
  {
    value: 360,
    label: '6 Hours',
  },
  {
    value: 420,
    label: '7 Hours',
  },
  {
    value: 480,
    label: '8 Hours',
  },
];

function TimeSlider() {
  return (
    <Box sx={{ width: '90%' }}>
      <Slider
        sx={{
          color:'secondary.light'
        }}
        aria-label="Minutes"
        defaultValue={10}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={5}
        marks={marks}
        min={0}
        max={480}
      />
    </Box>
  );
}

export default TimeSlider;