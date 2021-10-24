import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Admin</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            Here will be something
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
