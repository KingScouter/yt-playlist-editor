// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Outlet } from 'react-router-dom';
import Sidebar from 'src/components/sidebar/sidebar.component';
import styles from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './app.scss';

export function App() {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
