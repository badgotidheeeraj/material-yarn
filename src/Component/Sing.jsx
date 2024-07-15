import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();

export default function SignUp() {
  const [passvalidate, SetPassValid] = React.useState('')
  const [passvalidate1, SetPassValid1] = React.useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataSing = new FormData(event.currentTarget);
    let data = {
      email: dataSing.get('email'),
      first_name: dataSing.get('firstName'),
      last_name: dataSing.get('lastName'),
      password: dataSing.get('password'),
      password1: dataSing.get('password1'),
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/sign-up`, data);
      if (response.data.access && response.data.refresh) {
        // setToken(response.data.access);
        navigate("/");
        console.log('Response:', response.data);
      }
    } catch (error) {
      // Improved error handling
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Server error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Network error:', error.message);
      } else {
        // Something else caused an error
        console.error('Error:', error.message);
      }
    }

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  // name={passvalidate}
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => { SetPassValid(e.target.get) }}
                  autoComplete="new-password"
                  style={{ color: passvalidate === passvalidate1 ? 'green' : 'red' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name={passvalidate1}
                  label="Password"
                  type="password"
                  id="password1"
                  onChange={(e) => { SetPassValid1(e.target.get) }}
                  autoComplete="new-password"
                  style={{ color: passvalidate === passvalidate1 ? 'green' : 'red' }}

                />
                <Typography>
                  {passvalidate === passvalidate1 ? "Password match" : "Password does not match"}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Link href="/Nav">Navigate</Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Sign sx={{ mt: 5 }} />y */}
      </Container>
    </ThemeProvider>
  );
}
