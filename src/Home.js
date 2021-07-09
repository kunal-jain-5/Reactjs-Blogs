import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(Response => {
            if (!Response.ok){
                throw Error("could not fetch data")
            }
            return Response.json()
        })
        .then((data) => {
            setBlogs(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message)
            setIsPending(false)
        })
    }, [])

    return (
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogprop={blogs} title="All Blogs" />}
        </div>
      );
}
 
export default Home;