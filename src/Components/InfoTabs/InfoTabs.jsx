import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import InfoSkills from '../InfoSkills/InfoSkills';
import InfoEducation from '../InfoEducation/InfoEducation';
import InfoExperience from '../InfoExperience/InfoExperience';
import { CustomTab, CustomTabs } from './InfoTabs.styles';

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const InfoTabs = () => {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container>
      <CustomTabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
        <CustomTab label="Skills" />
        <CustomTab label="Experience" />
        <CustomTab label="Education" />
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
