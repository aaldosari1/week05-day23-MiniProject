export const setVideos = (mostPopular) =>{

    return{
    type: "SET_VIDEOS",
    payload: mostPopular, 
    }
}

export const VideoDetails = (snippet) => {
    return {
        type : "SHOW_VIDEO_DETAILS",
        payload: snippet

    }
}

export const WatchLaterVideos = (videoId) => {
    return {
        type : "WATCH_LATER_VIDEOS",
        payload: videoId

    }
}