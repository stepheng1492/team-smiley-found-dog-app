import React, { useState } from 'react';
// imports in the different component pages to to routed out to our index.html
import Dash from './pages/Dash/index.jsx';
import SignUp from './pages/SignUp/index.jsx';
import SignIn from './pages/SignIn/index.jsx';
// import new lost dog map index
import LostPets from './pages/LostPets/index.jsx' 
// imports components for using our material ui design components
import { MuiThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import  { CssBaseline , CircularProgress } from '@material-ui/core';
// imports components we need to proper route the different pages to the dom
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import brightness_6 from '@material-ui/icons'


// calls the material ui function that resolves to a default theme to be used on app

// const themeName = 'Limed Spruce Dove Gray Madagascar Tree Boa';
const theme = createMuiTheme();

const darkTheme = createMuiTheme({
   palette: {
      type: 'dark',
   }
});

const whichTheme = () => {
   
   let toggle = false;
   if (!toggle) {
      toggle = !toggle;
      return theme;
   } else {
      toggle = !toggle;
      return darkTheme
   }
}

// creat main app componet to be used with react
function App(props){
   let [toggle, setToggle] = useState(false);
   // setToggle = () => {
   //    toggle = !toggle
   // }
   const letsToggle = () => {
      setToggle(!toggle)
   }
   if (toggle === false) {   
   return (
    // use multi theme component to apply generated theme througout our app
   <MuiThemeProvider theme={theme}>
          {/* use baseline component to give css functionality to individual components/pages in the app */}
      <CssBaseline/>
           {/* use main router component first to use subsequent functions */}
      <Router>
               {/* use switch function to handle different routing paths */}
            <Switch>
                   {/* define paths, adn where to route those paths when entered */}
                <Route exact path ='/' component={SignIn}/>
               <Route exact path='/signup' component={SignUp} />
                   {/* may change the login to / root so it default */}
               <Route exact path='/signin' component={SignIn} />
               <Route exact path='/dash' 
                  // component={Dash} 
                  // changeTheme={whichTheme}
                  render={(props) => (<Dash {...props} whichTheme={letsToggle}/>)}
                  />
                   {/* add route for new map page */}
               <Route exact path='/lostpets' component={LostPets} />
            </Switch>
      </Router>
   </MuiThemeProvider>
   )}
   else if (toggle === true) {
      return (
         <MuiThemeProvider theme={darkTheme}>
          {/* use baseline component to give css functionality to individual components/pages in the app */}
      <CssBaseline/>
           {/* use main router component first to use subsequent functions */}
      <Router>
               {/* use switch function to handle different routing paths */}
            <Switch>
                   {/* define paths, adn where to route those paths when entered */}
                <Route exact path ='/' component={SignIn}/>
               <Route exact path='/signup' component={SignUp} />
                   {/* may change the login to / root so it default */}
               <Route exact path='/signin' component={SignIn} />
               <Route exact path='/dash' 
                  // component={Dash} 
                  // changeTheme={whichTheme}
                  render={(props) => (<Dash {...props} whichTheme={letsToggle}/>)}
                  />
                   {/* add route for new map page */}
               <Route exact path='/lostpets' component={LostPets} />
            </Switch>
      </Router>
   </MuiThemeProvider>
      )
   }
}

// export to be used and compiled from main index
export default App