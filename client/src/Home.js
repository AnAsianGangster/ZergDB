import { useEffect, useState } from "react";
import ProfileDisplay from "./ProfileDisplay";
import SingleProfileDisplay from "./SingleProfileDisplay";
import BlogList from "./BlogList";
import SearchBox from "./SearchBox";


const Home = () => {
  // const [blogs, setBlogs] = useState(null)
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

  // useEffect(() => {
  //   fetch('http://localhost:3000/blogs')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setBlogs(data);
  //     })
  // }, [])

  // const {nric, searchField} = this.useState

  const handleChange = e => {
    console.log(e.target.value)

    setSearchInput(e.target.value)

    fetch('http://localhost:3000/profile/'+e.target.value)
    .then(res => {
      return res.json();
    })
    .then((data) => {
      // console.log('yeboi')
      console.log(data)
      setSingleProfile(data)
    })
  };

  console.log(singleProfile)

  return (
    <div className="home">
      <SearchBox placeholder="Enter your IC number" handleChange={handleChange}/>
      <p>{searchInput}</p>
   
      {profiles && <ProfileDisplay profiles={profiles} />}
      {singleProfile && <SingleProfileDisplay singleProfile={singleProfile} />}

      {/* {blogs && <BlogList blogs={blogs} />} */}
    </div>
  );
}
 
export default Home;
