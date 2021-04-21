import { useEffect, useState } from "react";
import ProfileDisplay from "./ProfileDisplay";
import BlogList from "./BlogList";
import SearchBox from "./SearchBox";


const Home = () => {
  // const [blogs, setBlogs] = useState(null)
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

  return (
    <div className="home">
      <SearchBox placeholder="Enter your IC number" handleChange={(e)=>console.log(e.target.value)}/>
      {profiles && <ProfileDisplay profiles={profiles} />}
      {/* {blogs && <BlogList blogs={blogs} />} */}
    </div>
  );
}
 
export default Home;
