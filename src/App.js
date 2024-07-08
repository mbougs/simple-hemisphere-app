import React from 'react';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//     );
//     return (
//         <div>
//             Latitude: 
//         </div>
//     )
// }

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return(
            <div>
                You are in the Northern Hemisphere
            </div>
        )
    }
}

export default App;