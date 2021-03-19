import React from 'react';
import ProjectCollection from '../../Components/ProjectCollection/ProjectCollection';
import Title from '../../Components/Title/Title';
import { Container } from '@material-ui/core';

const PortfolioPage = () => {
  return (
    <div style={{ backgroundColor: '#2b2c2f', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Title head="Latest Work" subHead="Portfolio" />
        <ProjectCollection />
      </Container>
    </div>
  );
};

export default PortfolioPage;
