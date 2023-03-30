import { Navigate } from 'react-router-dom';
import TokenService from '../../services/token.service';

const ProtectedRoute = ({ children }) => {
  const user = TokenService.getUser();
  if (!user) {
    console.log('Not logged in -> Redirect to login');
    return <Navigate to='/login' replace />;
  }
  console.log('Protected Route - Token: ', user);

  return children;
}

export function Inner() {
  const user = TokenService.getUser();

  return (
    <div>
      This is the main menu
      {
        user ? (
          <p>Login successfull. Token: {JSON.stringify(user)}</p>
        ) : (
          <p>Login didn't happen for now</p>
        )
      }
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