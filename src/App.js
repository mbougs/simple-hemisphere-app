import React from 'react';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)
    );
    return (
        <div>
            Hello World!
        </div>
    )
}

export default App;