import React from 'react'
import DepressionNovelOneBanner from 'components/template/depression/novel-one-banner'

export default function StoryDetail() {

  const data = {
    image: 	'https://i.pinimg.com/236x/fb/23/5a/fb235a09afcd377386a489a3adc1334e.jpg',
    heart: 1000,
    _id: '1',
    title: 'Nice to meet you Lonely girl',
    template: 'depression-novel-one-banner/depression-social-phobia'
  }

  const templateType = data.template.split('/')[0]

  let Component
  switch (templateType) {
    case 'depression-novel-one-banner':
      Component = DepressionNovelOneBanner
      break;
    default:
      break;
  }

  return (
    <div className='story-detail'>
      <Component data={data}/>
    </div>
  )
}