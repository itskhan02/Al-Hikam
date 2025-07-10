import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'
import Prayertime from '../components/Prayertime';

const NamazTime = () => {

const navigate = useNavigate();  
  return (
    <div style={{ padding: '1rem', fontSize: '1.6rem' }}>
      <div className='col-12'>
        <button className='btn btn-secondary mb-3' onClick={()=>navigate(-1)}>
          <IoChevronBack/>
        </button>
      </div>
      <div className='namaztime'>
        <Prayertime/>
      </div>
    </div>
  )
}

export default NamazTime
