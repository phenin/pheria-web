import React from 'react';

import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {getBackground} from '../../store/actions/storyActions';
import {Modal} from 'antd';
import 'css/list-group-template.scss'

export default function ListBackgroundModal({dialog, closeModal}) {
  const state = useSelector(stateSelector, shallowEqual);
  const dispatch = useDispatch();

  const selectBackground = value => {
    dispatch(getBackground(value));
    closeModal();
  };

  return (
    <Modal title="Chọn ảnh nền" 
      visible={dialog}
      onCancel={closeModal} footer={null}
      wrapClassName="list-template-modal">
      <div className="list-template">
        {state.listBackground.map((item, index) => {
          let backgroundColor;
          if (item.backgroundColor.length >= 2) {
            backgroundColor = {
              linearGradient: {
                colors: [
                  item.backgroundColor[0],
                  item.backgroundColor[1],
                ],
                start: [0, 0],
                end: [1, 0],
              },
            };
          } else {
            backgroundColor = item.backgroundColor[0];
          }
          return (
            <div onClick={() => selectBackground(item)}
              className="template-background"
              key={index}
              style={{
                backgroundColor: backgroundColor,
                color: item.color
              }}>
                Aa
            </div>
          )
          })
        }
      </div>
    </Modal>
  );
}

function stateSelector(state) {
  return {
    listBackground: state.background.listBackground,
    loading: state.background.loading,
  };
}
