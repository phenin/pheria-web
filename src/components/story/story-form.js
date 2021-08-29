import React, { useState } from 'react'
import { Input, Button } from 'antd';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import {
  changeContent,
  changePositionTemplate,
  changePositionContent,
} from '../../store/actions/storyActions';
import {REACT_APP_API} from '../../constants';
import Draggable from 'react-draggable';
import {Modal} from 'antd';

export default function StoryForm({color}) {
  const [dialog, setDialog] = React.useState(false);
  const [area, setArea] = React.useState(null);
  const state = useSelector(stateSelector, shallowEqual);
  const dispatch = useDispatch();

  const openTitleStory = item => {
    setArea(item);
    setDialog(true);
    console.log(dialog)
  };
  const updateContent = () => {
    dispatch(changeContent(area));
    closeModal();
  };
  const handleChangeInput = (key, event) => {
    console.log(key, event)
    setArea({...area, [key]: event.target.value});
  };
  const closeModal = () => {
    setDialog(false);
  };
  
  const moveTemplate = (e,location, id) => {
    dispatch(
      changePositionTemplate({
        _id: id,
        x: location.x,
        y: location.y,
      }),
    );
  }

  const moveContent = (e,location, id) => {
    dispatch(
      changePositionContent({
        _id: id,
        x: location.x,
        y: location.y,
      }),
    );
  }

  return (
      <div className="story-form"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {state.templates.map((item, index) => {
          return (
            <Draggable
              key={'template' + index}
              defaultPosition={{x: item.x, y: item.y}}
              bounds="parent"
              position={null}
              onStop={(event, location)=>moveTemplate(event, location, item._id)}
              style={{
                width: 'fit-content'
              }}>

                <img
                  src={REACT_APP_API + item.template.image}
                  width={`${item.template.width * 10}`}
                  height={`${item.template.height * 10}`}
                  alt={item.template.code}
                />
            </Draggable>
          )
        })
        }
        {state.contents.map((item, index) => {
          return (
            <Draggable
              key={'content' + index}
              defaultPosition={{x: item.x, y: item.y}}
              bounds="parent"
              position={null}
              onStop={(event, location)=>moveContent(event, location, item._id)}
              style={{
                width: 'fit-content'
              }}>
                <div
                  style={{
                    borderWidth: 1,
                    borderColor: '#ff00ff',
                    borderStyle: 'solid',
                    borderRadius: 4,
                    width: item.width * 3,
                    height: item.height * 3
                  }}
                  onClick={() => openTitleStory(item)}
                  onTouchStart={() => openTitleStory(item)}>
                    <div style={{color: color}}>
                      {item.text}
                    </div>
                </div>

            </Draggable>
          )
        })
        }
        {
          dialog && (
            <Modal title="Nội dung" 
              visible={dialog} onCancel={() => closeModal()} footer={null}
              wrapClassName="content-modal">
              <div className="">
                <Input
                  placeholder="Chiều dài %"
                  defaultValue={area.width.toString()}
                  onChange={v => handleChangeInput('width', v)}
                />
                <Input
                  placeholder="Chiều cao %"
                  defaultValue={area.height.toString()}
                  onChange={v => handleChangeInput('height', v)}
                />
              </div>
              <Input.TextArea
                placeholder="Nhập nội dung"
                defaultValue={area.text}
                onChange={v => handleChangeInput('text', v)}
              />
              <Button type="primary" block onClick={() => updateContent()}>
                Lưu
              </Button>
            </Modal>
          )
        }
      </div>
    
  )
}

function stateSelector(state) {
  return {
    templates: state.story.templates,
    contents: state.story.contents,
  };
}