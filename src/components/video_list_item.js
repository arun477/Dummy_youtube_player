import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
 const imgUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
       <div className="video-List media">
          <div className="media-left">
             <img className = "media-object"  src={imgUrl}/>
          </div>

          <div className="media-body">
             <div className="media-heading">
              <p> {video.snippet.title} </p>

             </div>
          </div>
       </div>
    </li>
  )
}

export default VideoListItem;
