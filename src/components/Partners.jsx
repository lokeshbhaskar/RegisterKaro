import React from 'react'
import coinbase from '../assets/coinbase.svg'
import spotify from '../assets/spotify.svg'
import slack from '../assets/slack.svg'
import dropbox from '../assets/dropbox.svg'
import webflow from '../assets/webflow.svg'
import zoom from '../assets/zoom.svg'


const Partners = () => {
  return (
    <div>
        <div className='flex flex-wrap justify-center items-center h-[550px] md:h-[176px]  gap-8 bg-white p-10 '>
            <img src={coinbase} alt=""/>
            <img src={spotify} alt=""/>
            <img src={slack} alt=""/>
            <img src={dropbox} alt=""/>
            <img src={webflow} alt="" />
            <img src={zoom} alt="" />
        </div>
    </div>
  )
}

export default Partners