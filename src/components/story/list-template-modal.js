import React from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {addTemplate} from '../../store/actions/storyActions';
import {REACT_APP_API} from '../../constants';
import {Modal} from 'antd';
import 'css/list-group-template.scss'

export default function ListTemplateModal({dialog, closeModal}) {
  const state = useSelector(stateSelector, shallowEqual);
  const dispatch = useDispatch();

  const selectTemplate = template => {
    dispatch(addTemplate(template));
    closeModal();
  };

  return (
    <Modal title="Chọn hình ảnh bạn muốn thêm vào" 
      visible={dialog}
      onCancel={closeModal} footer={null}
      wrapClassName="list-template-modal">
      <div className="list-template">
        {state.listTemplate.map((item, index) => {
          return (
            <img
              width={`${item.width}%`}
              height={`${item.height}%`}
              src={REACT_APP_API + item.image}
              alt={item.name}
              onClick={() => selectTemplate(item)}/>
            )
          })
        }
      </div>
    </Modal>
  );
}

function stateSelector(state) {
  return {
    listTemplate: state.template.listTemplate,
    loading: state.template.loading,
  };
}
