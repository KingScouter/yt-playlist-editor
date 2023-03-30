import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import TokenService from '../../services/token.service';

export async function loader({ request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  return { code };
}

export default function LoginSuccessfull() {
  const { code } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    // setApiToken(code);
    TokenService.updateLocalAccesToken(code);

    setTimeout(() => {
      console.log('Time for the redirect');
      navigate('/');
    }, 2000);
  })

  
  
  return (
    <div>
      <p>Login was successfull!</p>
      <p>Redirecting to main menu now!</p>
    </div>
  );
}