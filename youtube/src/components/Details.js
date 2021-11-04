import { useDispatch, useSelector } from "react-redux";

function Details() {
    
    const state = useSelector ((state) => {
         console.log(state)
        return {
    
   // videoDetails: state.mostPopularRducer.videoDetails,
        }
    })

    return(

        <div>

        <h1>Details Page </h1>
         

        </div>
    )
}

export default Details