import React from 'react'
import 'css/template/depression/novel-multi-banner.scss'

export default function NovelOneBanner({data}) {
  console.log(data)

  const { template } = data

  return (
    <div className={`depression-novel-one-banner`} 
      style={{
        backgroundColor: template.backgroundColor[0],
        color: template.color ? `#${template.color}` : '#000'
      }}
    >
      <div className='header'>
        <div className='img'>
          <img src={`${process.env.REACT_APP_API}/${template.image[0].url}`} alt='lonely girl' />
        </div>
        <div className='title'>
          {data.title}
        </div>
      </div>
      <div className='content'>
        {data.content}
      </div>
    </div>
  )
}