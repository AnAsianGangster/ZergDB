const ProfileDisplay = ({ profiles }) => {
  return (
    <div className="profile-display">
      {profiles.map(profile => (
          // { profile.value:   <p>yeah</p>}
        <div className="profile-preview" key={profile.id} >
          <h2>{ profile.id }</h2> is <b>{profile.value ? 'vaccinated' : 'unvaccinated'}</b>
        </div>
      ))}
    </div>
  );
}
 
export default ProfileDisplay;