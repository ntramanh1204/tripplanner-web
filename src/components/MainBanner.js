import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainBanner = () => {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/create-trip`;
        navigate(path);
    }

    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100%',
            overflow: 'hidden'
        }}>
            
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '40vh',
                backgroundImage: 'url(images/homepage_background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(4px)',
                zIndex: 1
            }}></div>
            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40vh',
                color: 'black'
            }}>
                <h1>Discover Your Perfect Journey</h1>
                <p>Your ultimate companion for personalized and seamless travel planning.</p>
                <button id="btnCreateNewTrip" 
                    className="rounded-pill" 
                    style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white' }}
                    onClick={routeChange}>
                    Create a New Trip
                </button>
            </div>
        </div>
    );
};

export default MainBanner;
