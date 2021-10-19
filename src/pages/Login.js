import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().max(255).required('Password is required')
    }),
    onSubmit: (values) => {
      dispatch({ type: 'AUTH/USER_LOGIN', user: values });
    }
  });

  return (
    <>
      {error && (
        <Typography color="textWarning" variant="h2">
          {error}{' '}
        </Typography>
      )}
      <Helmet>
        <title>Login | Admin </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mb: 3 }}>
              {/*              <Typography color="textSecondary" gutterBottom variant="body2">
              <Typography color="textPrimary" variant="h2">
                Sign in
              </Typography>
                Sign in on the internal platform
      </Typography> */}
            </Box>
            {/*          <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button
                  color="primary"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth
                  startIcon={<GoogleIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
      </Grid> */}
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography align="center" color="textSecondary" variant="h2">
                Sign in
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in now
              </Button>
            </Box>
            {/*   <Typography color="textSecondary" variant="body1">
              Don&apos;t have an account?{' '}
              <Link
                component={RouterLink}
                to="/register"
                variant="h6"
                underline="hover"
              >
                Sign up
              </Link>
            </Typography>
            */}
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
