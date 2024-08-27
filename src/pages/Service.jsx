import React from 'react'
import Container from '../components/Container'
import Box from '../components/Box';
import BoxImg1 from './../components/images/Icon1.png'
import BoxImg2 from "./../components/images/Icon2.png";
import BoxImg3 from "./../components/images/Icon3.png";

const Service = () => {
  return (
    <div id="service" className="py-10">
      <Container>
        <div>
          <div className="mx-auto text-center">
            <h2 className="text-[36px] font-semibold leading-[64px] text-secondary max-w-[542px] mx-auto">
              Manage your entire community in a single system
            </h2>
            <p className="text-4 font-normal leading-[24px] text-para mt-4">
              Who is Nextcent suitable for?
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <Box
              itemImg={BoxImg1}
              alt="Box icon img"
              itemName="Membership Organisations"
              itemPera="Our membership management software provides full automation of membership renewals and payments"
            />
            <Box
              itemImg={BoxImg2}
              alt="Box icon img"
              itemName="National Associations"
              itemPera="Our membership management software provides full automation of membership renewals and payments"
            />
            <Box
              itemImg={BoxImg3}
              alt="Box icon img"
              itemName="Clubs And Groups"
              itemPera="Our membership management software provides full automation of membership renewals and payments"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Service