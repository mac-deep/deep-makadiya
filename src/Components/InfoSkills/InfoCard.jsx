import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { SkillBar } from './InfoSkills.styles';

const InfoCard = ({ value }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <SkillBar variant="determinate" value={value} />
      </Box>
      <Box>
        <Typography variant="body2" color="inherit">
          {value}%
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
