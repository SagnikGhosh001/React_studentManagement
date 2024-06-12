import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Card, CardBody, CardFooter } from 'reactstrap';

const CourseBodySkeleton = () => {
    const skeletonBaseColor = 'blue';
    const skeletonHighlightColor = '#87CEFA';

    return (
        <SkeletonTheme baseColor={skeletonBaseColor} highlightColor={skeletonHighlightColor}>
            <Card style={{
                border: 'none',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                fontFamily: 'Arial, sans-serif',
                color: 'white',
                background: 'transparent', 
                minHeight: '200px',
                padding: '20px', 
            }}>
                <CardBody>
                    <Skeleton height={30} width={`80%`} style={{ marginBottom: '10px' }} /> 
                    <Skeleton height={20} width={`60%`} style={{ marginBottom: '20px' }} /> 
                    <CardFooter style={{ display: 'flex', gap: '10px' }}>
                        <Skeleton height={40} width={100} /> 
                        <Skeleton height={40} width={100} /> 
                        <Skeleton height={40} width={100} /> 
                    </CardFooter>
                </CardBody>
            </Card>
        </SkeletonTheme>
    );
};

export default CourseBodySkeleton;
