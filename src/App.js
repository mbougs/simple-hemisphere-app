import React, { useState } from 'react';
import HemisphereDisplay from './HemisphereDisplay';

const App = () => {
    const [ latitude, setLatitude ] = useState(null);
    // const [ longitude, setLongitude ] = useState(null);
    const [ errorMessage, setErrorMessage ] = useState('');

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            setLatitude( position.coords.latitude )
            // setLongitude( position.coords.longitude )
        },
        (error) => {
            setErrorMessage( error.message )
        }
    );
    return (
        <>
        { errorMessage && !latitude && <div>{ errorMessage }</div> }
        { !errorMessage && latitude && <div><HemisphereDisplay latitude={ latitude } /></div> }
        {/* { !errorMessage && (latitude && longitude) && <div><HemisphereDisplay latitude={ latitude } longitude={ longitude } /></div> } */}
        { !errorMessage && !latitude && <div>Loading...</div> }
        </>
    )
}

export default App;

// class App extends React.Component {
//     constructor (props) {
//         super(props)
        
//         this.state = { latitude: null, longitude: null, errorMessage: '' }
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 this.setState({ latitude: position.coords.latitude })
//                 this.setState({ latitude: position.coords.longitude })
//             },
//             (error) => {
//                 this.setState({ errorMessage: error.message })
//             }
//         );
//     }
//     render() {
//         return(
//             <div>
//                 <p>
//                 { this.state.latitude }
//                 </p>
//                 <p>
//                 { this.state.longitude }
//                 </p>
//                 <p>
//                 { this.state.errorMessage }
//                 </p>
//             </div>
//         )
//     }
// }

// export default App;