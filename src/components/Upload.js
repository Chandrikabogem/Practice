import React from 'react'
import './Upload.css'

const Upload = () => {
  return (
    <div className='container'>
      <input type="file" id="upload" hidden/> 
<label htmlFor="upload">Upload</label>

    </div>
  )
}

export default Upload
