import ProfileInfo from './profile-info/profile-info';
import styles from './sidebar.module.scss';

const mockPlaylistData = [
  `Let's Play`,
  'VLOG',
  'Favorites',
  'My holiday videos',
]

const Sidebar: React.FC = () => {
  return (
    <div className={styles['sidebar']}>
      <ProfileInfo />
      <ul className={styles['playlist-list']}>
        { mockPlaylistData.map(elem => <li key={elem}>{elem}</li>)}
      </ul>
    </div>
  );
}

export default Sidebar;