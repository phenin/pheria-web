import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {
  HeartFilled,
} from '@ant-design/icons';
import 'css/story.scss'
import { useHistory } from "react-router-dom";

export default function Story({data}) {
  const history = useHistory();

  const [paddingBottom, setPaddingBottom] = useState(100)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMeta = (url, callback) => {
    var img = new Image();
    img.src = url;
    img.onload = function() { callback(this.width, this.height); }
  }

  useEffect(() => {
    getMeta(data.image, function(width, height) {
      if(width && height) {
        setPaddingBottom( height * 100 /width )
      }
      else{
        setPaddingBottom(100)
      }
    })
  }, [data, getMeta, setPaddingBottom])

  const viewDetail = (item) =>{
    history.push(`/story/${item._id}`);
  }

  return (
    <div className={`story ht-${Number.parseInt(Math.abs(paddingBottom - 100) / 10 )}`}
      onClick={()=>viewDetail(data)}>
      <div className="story_container">
        <Link className="story_link" to="/">
          <div className="story_wrap" style={{paddingBottom: paddingBottom + '%'}}>
            {
              data.image && <img className="story_img" src={data.image} alt=""/> 
            }
          </div>
          <div className="story_heart">
            <HeartFilled className="heart"/> {data.heart}
            <div className="story_text">{data.title}</div>
          </div>
        </Link>
      
      </div>
    </div>
  )
}