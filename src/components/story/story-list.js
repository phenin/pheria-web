import React, {useState} from 'react'
import { Row, Col } from 'antd';

import Story from "components/story/story"
import 'css/story.scss'

export default function StoryList() {

  const [story, setStory] = useState([
    {
      image: 	'https://i.pinimg.com/236x/fb/23/5a/fb235a09afcd377386a489a3adc1334e.jpg',
      heart: 1000,
      link: '/'
    },
    {
      image: 	'https://i.pinimg.com/474x/76/8a/0e/768a0e81b64a6702695dfbff459222b0.jpg',
      heart: 420,
      link: '/'
    },
    {
      image: 	'https://i.pinimg.com/236x/91/4b/69/914b69b925fba0aebbe04e5ff473c022.jpg',
      heart: 235,
      link: '/'
    },
    {
      image: 	'https://i.pinimg.com/236x/5f/5a/3d/5f5a3d6d6bfd68ce8ef2cb99870d6889.jpg',
      heart: 1425,
      link: '/'
    },
    {
      image: 	'https://i.pinimg.com/236x/1b/3c/fc/1b3cfcbefcffa013caafd5f6f385f272.jpg',
      heart: 2342,
      link: '/'
    },
    {
      image: 	'https://i.pinimg.com/236x/97/48/53/974853624f1046fa67ad5d1a107c0727.jpg',
      heart: 1001,
      link: '/'
    },
    {
      image: 'https://i.pinimg.com/236x/26/5b/9a/265b9a00bd8bbee7a9a025683272a6ec.jpg',
      heart: 1001,
      link: '/'
    }

  ])

  return (
    <div className="story-list">
      <div className="container">
        {
          story.map((item, index)=>{
            return <Story data={item} key={index}/>
          })
        }
      </div>
    </div>
  )
}