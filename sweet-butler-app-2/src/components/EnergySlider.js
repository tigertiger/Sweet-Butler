import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value} min`;
}

const marks = [
  {
    value: 10,
    label: 'I\'m Dead ☠️',
  },
  {
    value: 30,
    label: 'Low 🥱',
  },
  {
    value: 55,
    label: 'Alright 🙂',
  },
  {
    value: 70,
    label: 'Buzzin! 😀',
  },
  {
    value: 90,
    label: 'Bring me the horizon! 🏴‍☠️',
  },
];

function EnergySlider() {
  return (
    <Box sx={{ width: '90%' }}>
      <Slider
        sx={{
          color: 'secondary.light'
        }}
        aria-label="Minutes"
        defaultValue={60}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks={marks}
        min={0}
        max={90}
      />
    </Box>
  );
}

export default EnergySlider;