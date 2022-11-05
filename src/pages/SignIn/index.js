import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import GithubButton from 'react-github-login-button';
import axios from 'axios';
import qs from 'query-string';
import dotenv from 'dotenv';
dotenv.config();

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';

import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  function redirectToGithub() {
    const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
    const params = {
      response_type: 'code',
      scope: 'user public_repo',
      client_id: 'd97594e864f822a80ab2',
      redirect_uri: 'http://localhost:3000/dashboard/subscription',
      state: 'drivent'
    };
  
    const queryStrings = qs.stringify(params);
    console.log(queryStrings);
    const authorizationUrl =`${GITHUB_AUTH_URL}?${queryStrings}`;
    window.location.href = authorizationUrl;
  }
  
  window.onload = async() => {
    document.querySelector('.login').addEventListener('click', redirectToGithub);
    const { code } = qs.parseUrl(window.location.href).query;
    if (code) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, {
          code
        });
        const user = response.data;
        alert('logged with GitHub');
        console.log(user);
      } catch (err) {
        alert('GitHub login failed');
        console.log('err', err);
      }
    }
  };  

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>
            Entrar
          </Button>
        </form>
      </Row>
      <GithubButton
        className='login'
        onClick={() => {
          console.log('Github button clicked');
          redirectToGithub();
        }}
      />
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
