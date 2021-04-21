import { useEffect, useState } from "react";
import ProfileDisplay from "./ProfileDisplay";
import SingleProfileDisplay from "./SingleProfileDisplay";
import SearchBox from "./SearchBox";


const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [singleProfile, setSingleProfile] = useState(null)
  const [profiles, setProfiles] = useState(null)


    useEffect(()=> {
    fetch('http://localhost:3000/profile')
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
      setProfiles(data)
    })
  },[])

  const handleChange = e => {
    console.log(e.target.value)

    setSearchInput(e.target.value)

    fetch('http://localhost:3000/profile/'+e.target.value)
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
      setSingleProfile(data)
    })
  };

  console.log(singleProfile)

  return (
    <div className="home">
      <SearchBox placeholder="Enter your IC number" handleChange={handleChange}/>
      {/* <p>{searchInput}</p> */}
   
      {singleProfile && <SingleProfileDisplay singleProfile={singleProfile} />}

      {profiles && <ProfileDisplay profiles={profiles} />}


    </div>
  );
}
 
export default Home;
