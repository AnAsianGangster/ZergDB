const ProfileDisplay = ({ profiles }) => {
  return (
    <div className="profile-display">
      {profiles.map(profile => (
          // { profile.value:   <p>yeah</p>}
        <div className="profile-preview" key={profile.id} >
          <h2>Hello, { profile.id }</h2>
          You are currently <b>{profile.value ? 'vaccinated' : 'unvaccinated'}</b>
          <p>{profile.value ? 'Thanks for doing your part to keep Singapore safe!' : ''}</p>
        </div>
      ))}
    </div>
  );
}
 
export default ProfileDisplay;

