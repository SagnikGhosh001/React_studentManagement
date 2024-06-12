import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CandidateBodySkeleton() {
    return (
        <div className="py-3">
            <div
                className="mb-3"
                style={{
                    borderRadius: '.5rem',
                    transition: 'transform 0.3s',
                    transform: 'none',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f4f5f7',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div
                    style={{
                        width: '33.33%',
                        borderTopLeftRadius: '.5rem',
                        borderBottomLeftRadius: '.5rem',
                        backgroundColor: '#C71585',
                        textAlign: 'center',
                        color: 'black',
                        padding: '1rem',
                    }}
                >
                    <Skeleton circle={true} height={80} width={80} />
                    <Skeleton height={20} width={`60%`} style={{ margin: '1rem auto' }} />
                    <Skeleton height={20} width={`40%`} style={{ marginBottom: '1rem' }} />
                    <Skeleton height={40} width={40} style={{ margin: '0 auto' }} />
                </div>
                <div style={{ width: '66.67%', padding: '1rem' }}>
                    <Skeleton height={30} width={`30%`} style={{ marginBottom: '1rem' }} />
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
                        <div style={{ width: '50%', paddingRight: '1rem' }}>
                            <Skeleton height={20} width={`80%`} style={{ marginBottom: '0.5rem' }} />
                            <Skeleton height={20} width={`60%`} />
                        </div>
                        <div style={{ width: '50%' }}>
                            <Skeleton height={20} width={`80%`} style={{ marginBottom: '0.5rem' }} />
                            <Skeleton height={20} width={`60%`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateBodySkeleton;
