import React from 'react'

function Banner1() {

     const [movie, setMovie] = useState ({});
     useEffect(()=>{
(async ()=> { 
    try {
    const request = await axios.get(requests.fetchNetflixOriginals)
    console.log(request)
    setMovie(request.data.result[Math.floor(Math.random() * request.data.results.length)]);
    }catch (error){

        console.log("error", error);
    }
     })()
     
     }, []);

  return (

   <>  
   <div className="banner"
   style={{
backgroundSize: "cover",
background: `URL()`,
backgroundPosition:`center`,
backgroundRepeat: `no-repeat`
   }}
  > 
 <div className="banner_contents">
    {movie?.title || movie?.name || movie?.original_name}
    <h1></h1></div>
    </div>  
    </>
    
  )
}

export default Banner1