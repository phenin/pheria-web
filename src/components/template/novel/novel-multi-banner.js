import React from 'react'
import 'css/template/depression/novel-one-banner.scss'

export default function NovelMultiBanner({data}) {

  const templateName = data.template.split('/')[1]

  return (
    <div className={`depression-novel-multi-banner ${templateName}`}>
      <div className='header'>
        <div className='img'>
          <img src={`/assets/template/depression/${templateName}.png`} alt='' />
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