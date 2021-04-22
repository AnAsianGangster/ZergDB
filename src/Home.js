import { useState } from "react";
import SingleProfileDisplay from "./SingleProfileDisplay";
import SearchBox from "./SearchBox";


const Home = () => {
  const [singleProfile, setSingleProfile] = useState(null)

  const handleChange = e => {
    console.log(e.target.value)

    fetch('http://localhost:3000/key-value-pair?key='+e.target.value, {mode: 'cors'})
    .then(res => {
      console.log(res)
      return res.json();
    })
    .then((body) => {
      console.log(body.data)
      setSingleProfile(JSON.parse(body.data))
    })
    .catch(error => {
      console.log(error)
  })  
};

  return (
    <div className="home">
      <SearchBox placeholder="Enter your IC number" handleChange={handleChange}/>
      {/* <p>{searchInput}</p> */}
   
      {singleProfile && <SingleProfileDisplay singleProfile={singleProfile} />}

    </div>
  );
}
 
export default Home;
