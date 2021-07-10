import React from 'react'
import 'css/story.scss'
import DepressionNovelOneBanner from 'components/template/depression/novel-one-banner'
import DepressionNovelMultiBanner from 'components/template/depression/novel-multi-banner'

import RainBorrowCloud from 'components/topping/rain/borrow-cloud'

export default function StoryDetail() {

  const data = {
    image: 	'https://i.pinimg.com/236x/fb/23/5a/fb235a09afcd377386a489a3adc1334e.jpg',
    heart: 1000,
    _id: '1',
    title: 'Nice to meet you Lonely girl',
    template: 'depression-novel-multi-banner/depression-blue-room',
    topping: 'rain/borrow-cloud'
  }

  const templateType = data.template.split('/')[0]

  let Component
  switch (templateType) {
    case 'depression-novel-one-banner':
      Component = DepressionNovelOneBanner
      break;
    case 'depression-novel-multi-banner':
      Component = DepressionNovelMultiBanner
      break;
    default:
      break;
  }

  return (
    <div className='story-detail'>
      <Component data={data}/>
      <RainBorrowCloud />
    </div>
  )
}