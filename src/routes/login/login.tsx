import { Form, redirect } from "react-router-dom";
import styles from './login.module.css';

const redirectUri = 'http://localhost:4200/loginSuccess'
const authTokenURL = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=1064824030437-tkl6qv85d1j6ab6ech9dpmcsvc0e8nt2.apps.googleusercontent.com&redirect_uri=' + redirectUri + '&response_type=code&scope=https://www.googleapis.com/auth/youtube.readonly';

export async function action() {
  return redirect(authTokenURL);
}

export default function Login() {
  return (
    <Form method="post" id="login-form" className={styles.loginFormContainer}>
      <button type="submit" className="btn btn-primary">Login with Google</button>
    </Form>
  )
}