const SingleProfileDisplay = ({ singleProfile }) => {

  console.log('heyy')
  console.log(singleProfile)
  console.log(singleProfile.id)
    return (
      <div className="single-profile-display">
          {(typeof singleProfile.id !=='undefined')?
          <div>
            <h2>Hello, { singleProfile.id }</h2>
            You are currently <b>{singleProfile.value ? 'vaccinated' : 'unvaccinated'}</b>
            <p>{singleProfile.value ? 'Thanks for doing your part to keep Singapore safe!' : ''}</p>
          </div>:    
          <div>Please enter a valid NRIC</div>
          }
    </div>
    );
  }
   
export default SingleProfileDisplay;