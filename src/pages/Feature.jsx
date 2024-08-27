import React from 'react'
import Container from '../components/Container'
import FeatureImg from './../components/images/Feature.png'
import Button from '../components/Button'

const Feature = () => {
  return (
    <div className='py-[94px]' id='feature'>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <img src={FeatureImg} alt="Feature Image" />
          </div>
          <div className="max-w-[55%]">
            <h2 className="text-[36px] font-semibold leading-[44px] max-w-[601px] text-secondary">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-4 font-normal leading-[24px] text-para mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <div className='w-[151px] mt-8'>
              <Button name="Learn More" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feature