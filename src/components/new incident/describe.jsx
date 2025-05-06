import React from 'react'
import NewIncident from '../../shared/newincident'
import { Title } from '../../common/title'
import { Disc } from '../../common/disc'

function Describe() {
  return (
      <section className='mb-96'  >
          <NewIncident to2='/incidents/step2' to='/incidents/step4' />
          <div className='max-w-[752px] h-[366px] mx-auto mt-[40px] px-4 lg:px-0 '>
              <Title className='text-[24px] mb-[12px]'>Let’s give the incident a title?</Title>
              <Disc className='text-sm mb-[24px]'>Make a title that will easily identify the incidents</Disc>
              <input type="text" className='w-full rounded-[6px] h-[50px] bg-[#F4F4F5] border border-[#E4E4E7] px-4 text-[12px] outline-cyan-500 mb-[25px] text-[#71717A] ' placeholder='Add title here' />
              <Title className='text-[24px] mb-[12px]'>Describe what happened during the incident?</Title>
              <Disc className='text-sm mb-[24px]'>Share some information about the incident. The when, where, how. </Disc>
              <textarea className='w-full bg-[#F4F4F5] outline-fuchsia-400 text-[12px] py-[20px] px-[10px] text-[#71717A] h-[127px] border border-[#E4E4E7] rounded-[6px] ' placeholder='Type here' name="Dipu" id=""></textarea>
          </div>
    </section>
  )
}

export default Describe