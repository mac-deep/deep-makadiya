import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Timeline from '@material-ui/lab/Timeline';

import InfoCard from './InfoCard';

const InfoEducation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  if (matches) {
    return (
      <Timeline align="left">
        <InfoCard date="2020 - present" courseTitle="BE " institutionName="LDCE, Ahm" />
        <InfoCard date="2019 - 2020" courseTitle="HighSchool" institutionName="BAPS, Gondal" />
      </Timeline>
    );
  } else {
    return (
      <Timeline align="alternate">
        <InfoCard date="2020 - present" courseTitle="BE " institutionName="LDCE, Ahm" />
        <InfoCard date="2019 - 2020" courseTitle="HighSchool" institutionName="BAPS, Gondal" />
      </Timeline>
    );
  }
};

export default InfoEducation;
