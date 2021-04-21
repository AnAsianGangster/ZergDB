const SingleProfileDisplay = ({ singleProfile }) => {

  console.log('heyy')
  console.log(singleProfile)
  console.log(singleProfile.key)
  console.log(singleProfile.key!=="")
  console.log(singleProfile.value!=="")
    return (
      <div className="single-profile-display">
          {/* {(typeof singleProfile.key !=='undefined')? */}
          {(singleProfile.value !=="")?
          <div>
            <h2>Hello, { singleProfile.key }</h2>
            You are currently <b>{singleProfile.value=="true" ? 'vaccinated' : 'unvaccinated'}</b>
            <p>{singleProfile.value=="true" ? 'Thanks for doing your part to keep Singapore safe!' : ''}</p>
          </div>:    
          <div>Please enter a valid NRIC</div>
          }
    </div>
    );
  }
   
export default SingleProfileDisplay;