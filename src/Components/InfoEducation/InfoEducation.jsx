import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import InfoCard from "./InfoCard";

const InfoEducation = () => {
  return (
    <Timeline align="alternate">
      <InfoCard
        date="2020 - present"
        courseTitle="BE "
        institutionName="LDCE, Ahm"
      />
      <InfoCard
        date="2019 - 2020"
        courseTitle="HighSchool"
        institutionName="BAPS, Gondal"
      />
    </Timeline>
  );
};

export default InfoEducation;
