import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import InfoCard from './InfoCard';

const InfoExperience = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Timeline align={matches ? 'left' : 'alternate'}>
      <InfoCard date="Aug 2020 - Present" jobTitle="Graphics Designer" companyName="LDCE PRAKALPA, Ahmedabad" />
    </Timeline>
  );
};

export default InfoExperience;
