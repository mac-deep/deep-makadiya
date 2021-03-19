import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import InfoCard from './InfoCard';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const InfoExperience = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Timeline align={`${matches} alternate : right`}>
      <InfoCard date="2020 - present" jobTitle="Frontend Dev" companyName="Pachira, India" />
      <InfoCard date="2019 - 2020" jobTitle="UX/UI" companyName="Pachira, India" />
    </Timeline>
  );
};

export default InfoExperience;
