import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Box, Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import InfoSkills from '../InfoSkills/InfoSkills';
import InfoEducation from '../InfoEducation/InfoEducation';
import InfoExperience from '../InfoExperience/InfoExperience';
import useStyles, { CustomTab, CustomTabs } from './InfoTabs.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const InfoTabs = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.dashes} />
      <CustomTabs
        variant={matches && 'scrollable'}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered={matches ? false : true}
      >
        <CustomTab label="Skills" {...a11yProps(0)} />
        <CustomTab label="Experience" {...a11yProps(1)} />
        <CustomTab label="Education" {...a11yProps(2)} />
      </CustomTabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <InfoSkills />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <InfoExperience />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <InfoEducation />
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
};

export default InfoTabs;
