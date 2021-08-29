import React from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import 'css/list-group-template.scss'
import {
  getListGroupTemplate,
  setGroupTemplate,
} from '../../store/actions/groupTemplateActions';
import {getListTemplate} from '../../store/actions/templateActions';
import {getListBackground} from '../../store/actions/backgroundActions';
import {addContent} from '../../store/actions/storyActions';
import ListTemplateModal from './list-template-modal';
import ListBackgroundModal from './list-background-modal';
import {Button, } from 'antd';

export default function ListGroupTemplate() {
  const [dialog, setDialog] = React.useState({
    template: false,
    background: false,
  });

  const state = useSelector(stateSelector, shallowEqual);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getListGroupTemplate());
  }, [dispatch, getListGroupTemplate]);

  const selectGroupTemplate = value => {
    dispatch(setGroupTemplate(value));
    if (value._id === 'background') {
      dispatch(getListBackground());
      setDialog({background: true, template: false});
    } else if (value._id === 'text') {
      dispatch(addContent());
    } else {
      dispatch(getListTemplate({group: value._id}));
      setDialog({background: false, template: true});
    }
  };

  const closeModal = () => {
    setDialog({background: false, template: false});
  };

  return (
    <div className="list-group-template">
      {state.loading ? (
        <Button isLoading></Button>
        ) : (
        state.listGroupTemplate.map((item, index) => {
          return (
            <div className="list-group-template__item"
              key={index}
              onClick={() => selectGroupTemplate(item)}>
              <div>{item.name}</div>
            </div>
          );
        })
      )}
      {dialog && dialog.template && (
        <ListTemplateModal dialog={dialog.template} closeModal={closeModal} />
      )}
      {dialog && dialog.background && (
        <ListBackgroundModal
          dialog={dialog.background}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

function stateSelector(state) {
  return {
    listGroupTemplate: state.groupTemplate.listGroupTemplate,
    loading: state.groupTemplate.loading,
  };
}
