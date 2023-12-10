import React, { Component, useState } from 'react'

// const images = require.context('./pics', true);
// const imageList = images.keys().map(image => images(image));
import p1 from './pics/1.jpg'
import p2 from './pics/2.jpg'
import p3 from './pics/3.jpg'
import p4 from './pics/4.jpg'
import p5 from './pics/5.jpg'
import p6 from './pics/6.jpg'
import p7 from './pics/7.png'

export default function Pics() {
  const [file, setFile] = useState(p1);

  function rand_file() {
    const file_Names = [
      p1, p2, p3, p4, p5, p6, p7
    ]
    const rand = Math.floor(Math.random() * file_Names.length);

    setFile(file_Names[rand]);
  }

  return (
    <div className='bg-black flex justify-center items-center'>
      <button className='h-screen w-1/2 text-white' onClick={rand_file}>
        <img src={file} alt='no pic' />
      </button>
    </div>
  )
}
