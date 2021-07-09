import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    
    const [blogs, setBlogs] = useState(null)


    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(Response => {
            return Response.json()
        })
        .then((data) => {
            setBlogs(data)
        })
    }, [])

    return (
        <div className="home">
            {blogs && <BlogList blogprop={blogs} title="All Blogs" />}
        </div>
      );
}
 
export default Home;