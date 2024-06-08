import { useState } from 'react';

const SearchBox = ({ setCoordinates }) => {
    const [input, setInput] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Use a geocoding API to convert the user's input into geographic coordinates
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?access_token=2e5760aa-2495-42d3-96c4-6b10930f920a`);
        const data = await response.json();

        // Update the center of the map with the new coordinates
        setCoordinates([data.features[0].center[1], data.features[0].center[0]]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBox;