import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Students({isShowStudents, back}) {
  const { t } = useTranslation('common')

  return (
    <div>
      {
        isShowStudents && (
          <div id="curator" v-if="isShowStudents">
            <div className="curator_title_wrapper">
              <span onClick={back} >{t('back')}</span>
              <div className="curator_line"></div>
              <div className="curator_title">{t('students')}</div>
              <div className="curator_line"></div>
              <span>14</span>
            </div>
            <div className="curator_list">
              <div className="curator_list_content">
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb"></div>
                  <div className="info">
                    <div className="name">Fantasy</div>
                    <div className="desc">Sam</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )
      }
    </div>
  )
}