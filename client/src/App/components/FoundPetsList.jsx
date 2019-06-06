import React from 'react'
import axios from 'axios'
import FoundPetsListItem from './FoundPetsListItem.jsx'

// function Found (props) {
//     const [state, setstate] = useState({found: [], })

// }
// class FoundPetsList extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             foundPets: [],
//             found: '',
//         }
//         this.handleFound = this.handleFound.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.foundPets = this.foundPets.bind(this);
//     }

//     //

    // foundPets() {
    //     return axios.put('user', {
    //         found: true
    //     })
    //     .then((results) => console.log(results))
    // }

//     handleFound(event) {
//         this.setState({ found: event.target.value })
//     }
 
//     //request to server to find found pets
//     handleSubmit(event) {
//         event.preventDefault();
//         const params = { found: this.state.found }
//         return axios.get('/user', { params })
//             .then((results) => this.setState({ foundPets: results.data }))
//     }

//     render() {
//         const { foundPets } = this.state;

//         return (
//             <div>
//                 <h1>Found Pets</h1>
//                 {foundPets.map((foundPet) => {

//                     return <FoundPetsListItem foundPet={foundPet}/>
//                 })}
//             </div>
//         )
//     }
// }

// export default FoundPetsList;
// function FoundPets(props) {
//     // console.log(props);
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     name: 'Cat in the Hat',
//     age: '',
//     multiline: 'Controlled',
//     currency: 'EUR',
//   });
// }

// export default FoundPets  