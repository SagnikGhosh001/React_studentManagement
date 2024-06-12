// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// function AdminDashboardSkeleton() {
//     return (
//         <section className="vh-100" style={{
//             height: '100vh',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}>
//             <MDBContainer className="py-5 h-100">
//                 <MDBRow className="justify-content-center align-items-center h-100">
//                     <MDBCol lg="6" className="mb-4 mb-lg-0">
//                         <MDBCard
//                             className="mb-3"
//                             style={{
//                                 borderRadius: '.5rem',
//                                 transition: 'transform 0.3s, box-shadow 0.3s',
//                                 minHeight: '300px', // Adjusted min-height to prevent overflow
//                             }}
//                         >
//                             <MDBCardBody>
//                                 <MDBRow className="g-0">
//                                     <MDBCol md="4" className="gradient-custom text-center text-white"
//                                         style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                                         <div className="my-5">
//                                             <Skeleton circle height={80} width={80} />
//                                         </div>
//                                         <MDBTypography tag="h5"><Skeleton width={100} /></MDBTypography>
//                                         <MDBTypography tag="h6"><Skeleton width={80} /></MDBTypography>
//                                     </MDBCol>

//                                     <MDBCol md="8">
//                                         <MDBCardBody className="p-4" style={{ fontWeight: 'bold' }}>
//                                             <MDBTypography tag="h6"><Skeleton width={100} /></MDBTypography>
//                                             <hr className="mt-0 mb-4" />
//                                             <MDBRow className="pt-1">
//                                                 <MDBCol size="6" className="mb-3">
//                                                     <MDBTypography tag="h6"><Skeleton width={80} /></MDBTypography>
//                                                     <MDBTypography tag="h6"><Skeleton width={150} /></MDBTypography>
//                                                 </MDBCol>
//                                                 <MDBCol size="6" className="mb-3">
//                                                     <MDBTypography tag="h6"><Skeleton width={80} /></MDBTypography>
//                                                     <MDBTypography tag="h6"><Skeleton width={150} /></MDBTypography>
//                                                 </MDBCol>
//                                             </MDBRow>

//                                             <MDBTypography tag="h6"><Skeleton width={120} /></MDBTypography>
//                                             <hr className="mt-0 mb-4" />
//                                             <MDBRow className="pt-1">
//                                                 <MDBCol size="6" className="mb-3">
//                                                     <MDBTypography tag="h6"><Skeleton width={80} /></MDBTypography>
//                                                     <MDBTypography tag="h6"><Skeleton width={150} /></MDBTypography>
//                                                 </MDBCol>
//                                                 <MDBCol size="6" className="mb-3">
//                                                     <MDBTypography tag="h6"><Skeleton width={80} /></MDBTypography>
//                                                     <MDBTypography tag="h6"><Skeleton width={150} /></MDBTypography>
//                                                 </MDBCol>
//                                             </MDBRow>
//                                         </MDBCardBody>
//                                     </MDBCol>
//                                 </MDBRow>
//                             </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         </section>
//     );
// }

// export default AdminDashboardSkeleton;
