import React from 'react';
import {useDispatch} from 'react-redux';
import useInterval from '../../lib/useInterval';
import { tick } from '../../lib/slices/clockSlice';
import Clock from '../../components/clock';
import Counter from '../../components/counter';

export default function Home() {
  const dispatch = useDispatch()
  // Tick the time every second
  useInterval(() => {
    dispatch(tick({ light: true, lastUpdate: Date.now() }))
  }, 1000)

  return (
    <>
      <Clock />
      <Counter />
    </>
  )
}