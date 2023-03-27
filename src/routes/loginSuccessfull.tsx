import { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { LoginContext } from 'src/contexts/LoginContext';

export async function loader({ request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  return { code };
}

export default function LoginSuccessfull(props) {
  const { code } = useLoaderData();
  const { setApiToken } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    setApiToken(code);

    setTimeout(() => {
      console.log('Time for the redirect');
      // setApiToken(code);
      // console.log('Timeout -> apiToken: ', code)
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