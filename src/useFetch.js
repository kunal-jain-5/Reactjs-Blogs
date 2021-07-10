import { useState, useEffect } from "react";



const useFetch = (url) =>{

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
    const abortController = new AbortController()
    setTimeout(() => {
    fetch(url,{signal: abortController.signal})
    .then(Response => {
        if (!Response.ok){
            throw Error("could not fetch data")
        }
        return Response.json()
    })
    .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
    })
    .catch(err => {
        if(err.name === 'AbortError'){
            console.log("Fetch Aborted")
        } else {
        setError(err.message)
        setIsPending(false)
        }
    })
    },1000)
    return () => abortController.abort();
}, [url])
    return {data,isPending,error}
}
export default useFetch