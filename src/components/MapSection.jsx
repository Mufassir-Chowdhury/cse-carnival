// MapSection.js

import React from 'react';

const MapSection = () => {
    // Replace the latitude and longitude with the actual coordinates
    const googleMapLink = `https://www.google.com/maps/place/LATITUDE,LONGITUDE`;
    const appleMapLink = `https://maps.apple.com/?q=LATITUDE,LONGITUDE`;

    return (
        <div className="container mx-auto mt-10 px-4 md:px-0 pt-8">
            {/* Your other content goes here */}

            {/* Map Section */}
            <div className="" style={{height: '23rem'}}>
                {/* Embed Google Map */}
                <a href={googleMapLink} target="_blank" rel="noopener noreferrer">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4079361997115!2d91.82826797393727!3d24.91816934294861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750ff8abc36900f%3A0xaf63c6d13271d74f!2sIICT%2C%20Shahjalal%20Univesity%20of%20Science%20and%20Technology%2C%20University%20Ave%2C%20Sylhet%203114!5e0!3m2!1sen!2sbd!4v1704691669750!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: '2px solid #280847', borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </a>

                {/* Link to Apple Maps */}
                {/* <a href={appleMapLink} target="_blank" rel="noopener noreferrer">
                    <img
                        src="/path/to/map-image.png"
                        alt="Map Preview"
                        className="w-full h-full object-cover"
                    />
                </a> */}
            </div>
        </div>
    );
};

export default MapSection;
