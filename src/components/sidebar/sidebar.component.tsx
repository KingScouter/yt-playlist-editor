import styles from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>New Playlist</li>
        <li>Edit Playlist</li>
        <li>Delete Playlist</li>
      </ul>
    </div>
  );
}

export default Sidebar;