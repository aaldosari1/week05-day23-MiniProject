const intialState = {
mostPopular: [],
videoDetails: {},
whachLater:[],
};

const mostPopularRducer=(state = intialState, {type, payload}) => {
    switch(type){

        case "SET_VIDEOS":
            return{

                mostPopular: payload,
                videoDetails: state.videoDetails,
                whachLater:state.whachLater,
            };

            case "SHOW_VIDEO_DETAILS":
              //  console.log(payload)
                return {
                    videoDetails: payload,
                    mostPopular: state.mostPopular,

                }

                case "WATCH_LATER_VIDEOS":
                    //  console.log(payload)
                    const arr = state.whachLater.slice()
                    arr.push(payload) 
                    
                    return {
                    whachLater:arr,
                    mostPopular: state.mostPopular,
                    videoDetails: state.videoDetails,
      
                      }   

        default:
          return state;    
    }
} 
export default mostPopularRducer