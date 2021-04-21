const ProfileDisplay = ({ profiles }) => {
    return (
      <div className="profile-display">
        {profiles.map(profile => (
          <div className="profile-preview" key={profile.id} >
            <h2>{ profile.value }</h2>
            {/* <p>Written by { blog.author }</p> */}
          </div>
        ))}
      </div>
    );
  }
   
  export default ProfileDisplay;