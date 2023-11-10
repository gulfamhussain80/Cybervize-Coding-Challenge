import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Typography variant="h1" align="center">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" align="center">
        The requested page does not exist.
      </Typography>
      <Button variant="outlined" sx={{marginTop:"10px"}} onClick={() => navigate(-1)} >
          Go Back
      </Button>
    </Wrapper>
  );
};

export default PageNotFound;
