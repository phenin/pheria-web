import React, {useCallback, useEffect} from 'react'
import {
  getUser
} from 'store/actions/userActions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'


export default function Home() { 
  const state = useSelector(stateSelector, shallowEqual)
  const dispatch = useDispatch()

  const {
    user
  } = state

  useEffect(() => {
    dispatch(getUser('60d8309bf57c6e1b524a22c0'))
  }, [dispatch])

  return (
    <div>
      user
      <p>{user && user.name}</p>
    </div>
  )
}

function stateSelector(state) {
  return {
      user: state.user.user
  }
}