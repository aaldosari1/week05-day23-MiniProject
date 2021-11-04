import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setVideos, VideoDetails } from "../reducers/videos/actions";
import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";


function Home(){
 const dispatch = useDispatch();
 const history = useHistory();
  //  const [list, setList] = useState([]);
const state = useSelector((state) =>{
      //console.log(state);
      return{
          mostPopular: state.mostPopularReducer.mostPopular,
      }
})
    useEffect(() => {
        axios
          .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyCvEMaYqo482Fw15UKmQgzb4JXh-54yXB4")
          .then((response) => {
            const action = setVideos(response.data.items);
               //setList(response.data.items)
             console.log(response.data)
           // console.log(response.data.items[0].snippet)
            dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


    return(

<div  className="homeStyle">
{ state.mostPopular.map((element) => {
  
  
    return <div className="VideoCard" onClick={() => {
        const action1 = VideoDetails(element)
        dispatch(action1)
        history.push("/Details")}}>  {/*dive on click so you can make the video clickable*/}  
     
     <img src={element.snippet.thumbnails.high.url}/>;
              <p>{element.snippet.title}</p>
              
    </div>
  
})} 

</div>

    )
}

export default Home