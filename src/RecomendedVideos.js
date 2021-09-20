import React from 'react'
import "./RecomendedVideos.css"
import VideoCard from './VideoCard'



function RecomendedVideos() {
  return (
    <div className="recomendedVideos">
      <h2>Recomended</h2>
      <div className-="recomendedVideos_videos">
        <VideoCard
          title=''
          views=''
          timestamp=''
          channelImage=''
          channel=''
          image=''
        />
          

        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />           
      </div>
    </div>
  )
}

export default RecomendedVideos
