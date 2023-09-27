import { loginService as Service } from '@/services';
import { ILogin } from '@/shared/interfaces';
import useNotifications from '../useNotifications';
import { redirect } from 'next/navigation';
import { useAppSelector } from '@/store';


export const useLogin = () => {
  const { successNotification, errorNotification } = useNotifications();
  const usersState = useAppSelector((state) => state.users);

  const handleLoginGoogle = () => {
    console.log('handleLoginGoogle')
    redirect('http://localhost:4000/api/auth/google');
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload: ILogin = {
      email: data.get('email') as string,
      password: data.get('password') as string,
    };

    const result = await Service.login({
      ...payload,
    });

    if(!result) {
      errorNotification('Por favor, verifica el usuario y contraseña');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      return;
    };

    successNotification('Login success');

    localStorage.removeItem('TOKEN_EXPIRADO');
    localStorage.setItem('token', result.token);
    localStorage.setItem('email', result.email);

    return true;
  };

  const handleLogout = () => {
    localStorage.setItem('TOKEN_EXPIRADO', 'SI');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  const isLogin = () => {
    let isLogin = true;

    if( localStorage.getItem('TOKEN_EXPIRADO') === 'SI' ) {
      isLogin = false;
    }

    if(!localStorage.getItem('token')) {
      isLogin = false;
    }

    return isLogin;
  }

  return {
    handleLoginGoogle,
    handleLogin,
    handleLogout,
    isLogin,
  };
};

export default useLogin;
