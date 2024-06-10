import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-black' style={{ backgroundColor: '#f0f0f0' }}>
      <MDBContainer></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-black' href=''>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}