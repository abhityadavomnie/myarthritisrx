import React from 'react'
import Registration from '../Registration'
import VideoBanner from './VideoBanner'
import VideoDetails from './VideoDetails'

export default function VideoIndex() {
  return (
   <>
    <VideoBanner/>
    <VideoDetails/>
    <Registration/>
   </>
  )
}
