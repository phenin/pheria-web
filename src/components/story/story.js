import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {
  HeartFilled,
} from '@ant-design/icons';
import 'css/story.scss'

export default function Story({data}) {

  const [paddingBottom, setPaddingBottom] = useState(100)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMeta = (url, callback) => {
    var img = new Image();
    img.src = url;
    img.onload = function() { callback(this.width, this.height); }
  }

  useEffect(() => {
    getMeta(data.image, function(width, height) {
      setPaddingBottom( height * 100 /width )
    })
  }, [data, getMeta, setPaddingBottom])

  

  return (
    <div className="story">
      <div className="story_container">
        <Link className="story_link" to="/">
          <div className="story_wrap" style={{paddingBottom: paddingBottom + '%'}}>
            <img className="story_img" src={data.image} alt=""/> 
          </div>
          <div className="story_heart">
            <HeartFilled className="heart"/> {data.heart}
          </div>
        </Link>
       
      </div>
    </div>
  )
}