import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginContext } from 'src/contexts/LoginContext'

const ProtectedRoute = ({ children }) => {
  const {apiToken} = useContext(LoginContext);
  console.log('Protected Route - Token: ', apiToken);
  if (!apiToken) {
    console.log('Not logged in -> Redirect to login');
    return <Navigate to='/login' replace />;
  }

  return children;
}

export function Inner() {
  const { apiToken, setApiToken } = useContext(LoginContext);

  const setTestToken = () => {
    setApiToken('testValue');
  }

  return (
    <div>
      This is the main menu
      {
        apiToken ? (
          <p>Login successfull. Token: {apiToken}</p>
        ) : (
          <p>Login didn't happen for now</p>
        )
      }
      <button onClick={setTestToken}>Set test token</button>
    </div>
  )
}

export default function MainMenu() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}