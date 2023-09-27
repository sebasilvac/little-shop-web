import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Login',
  description: 'login page',
};

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { LoginForm } from '@/components';

export default function SignIn({params}: any) {
  return (
    <>
      <Container component="main" maxWidth="xs" className='bg-slate-50 rounded-lg shadow-md pb-12'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <LoginForm />
        </Box>
      </Container>
    </>
  );
}