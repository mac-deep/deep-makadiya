import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import InfoCard from "./InfoCard";

const InfoExperience = () => {
  return (
    <Timeline align="alternate">
      <InfoCard
        date="2020 - present"
        jobTitle="Frontend Dev"
        companyName="Pachira, India"
      />
      <InfoCard
        date="2019 - 2020"
        jobTitle="UX/UI"
        companyName="Pachira, India"
      />
    </Timeline>
  );
};

export default InfoExperience;
