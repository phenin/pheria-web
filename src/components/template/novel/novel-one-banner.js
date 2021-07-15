import React from 'react'
import 'css/template/depression/novel-multi-banner.scss'

export default function NovelOneBanner({data}) {

  const { template } = data
  let backgroundColor = null
  if( template.backgroundColor && template.backgroundColor.length > 2 ) {
    let listColor = ''
    template.backgroundColor.forEach(color => {
      listColor = listColor + "#" + color + ", "
    })
    backgroundColor = `radial-gradient(${listColor})`
  }
  else if ( template.backgroundColor.length === 1 ){
    backgroundColor = `#${template.backgroundColor[0]}`
  }

  return (
    <div className={`depression-novel-one-banner`} 
      style={{
        backgroundColor: backgroundColor,
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