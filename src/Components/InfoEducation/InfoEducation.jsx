import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Timeline from '@material-ui/lab/Timeline';

import InfoCard from './InfoCard';

const InfoEducation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Timeline align={matches ? 'left' : 'alternate'}>
      <InfoCard
        date="2019 - Present"
        courseTitle="B.E. in Electronics & Communication"
        institutionName="LDCE, Ahmedabad"
      />
      <InfoCard
        date="2017 - 2019"
        courseTitle="Higher Secondary School"
        institutionName="BAPS Swaminarayan Vidhyamandir, Gondal"
      />
    </Timeline>
  );
};

export default InfoEducation;
