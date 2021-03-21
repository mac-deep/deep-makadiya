import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import InfoCard from './InfoCard';

const InfoExperience = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  if (matches) {
    return (
      <Timeline align="left">
        <InfoCard date="2020 - present" jobTitle="Frontend Dev" companyName="Pachira, India" />
        <InfoCard date="2019 - 2020" jobTitle="UX/UI" companyName="Pachira, India" />
      </Timeline>
    );
  } else {
    return (
      <Timeline align="alternate">
        <InfoCard date="2020 - present" jobTitle="Frontend Dev" companyName="Pachira, India" />
        <InfoCard date="2019 - 2020" jobTitle="UX/UI" companyName="Pachira, India" />
      </Timeline>
    );
  }
};

export default InfoExperience;
