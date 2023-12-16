import React, { Component, useState } from 'react'
import file_name from './File_imports';

export default function Pics() {
  const [file, setFile] = useState('/static/media/6.24e8657d9c320e19b8aa.jpg');

  function rand_file() {
    const rand = Math.floor(Math.random() * file_name.length);

    setFile(file_name[rand]);
  }

  return (
    <div className='flex justify-center items-center w-screen bg-black'>
      <div className='bg-black flex justify-center items-center w-1/2'>
        <button className='h-screen w-screen text-white' onClick={rand_file}>
          <img src={file} alt="nopic" className='rounded-2xl' style={{ flexShrink: 0 }} />
        </button>
      </div>
    </div>
  )
}
