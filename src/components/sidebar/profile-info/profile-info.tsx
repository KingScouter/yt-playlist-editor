import styles from './profile-info.module.scss';

/* eslint-disable-next-line */
export interface ProfileInfoProps {}

export function ProfileInfo(props: ProfileInfoProps) {
  return (
    <div className={styles['container']}>
      <img 
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" 
        alt="user-profile" 
        className={styles['profile-picture'] + " "}
      />
      <h4>Username</h4>
      <button type="button" className="btn btn-secondary">Logout</button>
    </div>
  );
}

export default ProfileInfo;
