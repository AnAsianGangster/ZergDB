const SingleProfileDisplay = ({ singleProfile }) => {

  var vaccinated = singleProfile.value.toLowerCase()==="true" 

    return (
      <div className="single-profile-display">
          {/* {(typeof singleProfile.key !=='undefined')? */}
          {(singleProfile.value !=="")?
          <div>
            <h2>Hello, { singleProfile.key }</h2>
            You are currently <b>{vaccinated ? 'vaccinated' : 'unvaccinated'}</b>
            <p>{vaccinated ? 'Thanks for doing your part to keep Singapore safe!' : ''}</p>
          </div>:    
          <div>Please enter a valid NRIC</div>
          }
    </div>
    );
  }
   
export default SingleProfileDisplay;