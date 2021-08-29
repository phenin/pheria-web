import React, {useEffect} from 'react'
import 'css/story.scss'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { getDetailStory, heartStory, getListCommentStory} from 'store/actions/storyActions'
import { useParams } from "react-router-dom"
import StoryHeader from "./story-header"

export default function StoryDetail() {

  const state = useSelector(stateSelector, shallowEqual);
  const [backgroundColor, setBackgroundColor] = React.useState('#000000');
  const {background, templates, contents} = state;
  const dispatch = useDispatch()
  const [dialog, setDialog] = React.useState(false);
  let slug  = useParams();

  useEffect(()=>{
    dispatch(getDetailStory({_id: slug.id}))
  },[dispatch, getDetailStory])

  useEffect(() => {
    dispatch(getListCommentStory({_id: slug.id}));
  },[dispatch, getListCommentStory, slug])

  useEffect(() => {
    if (
      background &&
      background.backgroundColor &&
      background.backgroundColor.length > 2
    ) {
      setBackgroundColor(
        `radial-gradient(${background.backgroundColor[0]}, ${background.backgroundColor[1]})`,
      );
    } else if (background && background.backgroundColor.length === 1) {
      setBackgroundColor(background.backgroundColor[0]);
    }
  }, [background, setBackgroundColor]);

  const openModal = () => {
    setDialog(true);
  };

  const closeModal = () => {
    setDialog(false);
  };

  return (
    <div className='story-detail' style={{backgroundColor: backgroundColor}}>
      <StoryHeader title="" hasMenu={true} color={background && background.color}/>
    </div>
  )
}

function stateSelector(state) {
  return {
    background: state.story.background,
    templates: state.story.templates,
    contents: state.story.contents,
    title: state.story.title,
    id: state.story._id
  };
}