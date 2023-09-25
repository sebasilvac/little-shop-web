'use client';

import {
  CssBaseline,
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import { FcGoogle } from 'react-icons/fc';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { useLogin } from '@/hooks';
import Link from 'next/link';

export const LoginForm = () => {

  const { handleLogin, handleLoginGoogle } = useLogin();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
            
          <Button type="submit" fullWidth variant="outlined" sx={{ mt: 2, mb: 2 }}>
            Sign In
          </Button>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<FcGoogle />}
            sx={{ mt: 4, mb: 2 }}
            onClick={handleLoginGoogle}
          >
            <Link href={'http://localhost:4000/api/auth'}>Sign In With Google</Link>
          </Button>

        </Box>
      </Box>
    </Container>
  );
};
