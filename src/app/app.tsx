// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Outlet } from 'react-router-dom';
import { LoginProvider } from 'src/contexts/LoginContext';
import styles from './app.module.scss';

export function App() {
  return (
    <LoginProvider>
      <div className={styles.rootContainer}>
        <div className={styles.sidebar}>
          <ul>
            <li>New Playlist</li>
            <li>Edit Playlist</li>
            <li>Delete Playlist</li>
          </ul>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </LoginProvider>
  );
}

export default App;
