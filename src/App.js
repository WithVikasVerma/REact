import './App.css';
import Appbar from "./components/Appbar"
import { Switch,Route, BrowserRouter} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {createTheme, ThemeProvider} from '@material-ui/core'
import DividerText from './components/Divider';
import Ske from './components/Skeleton';
import ImageMasonry from './components/Masonry';
import RecipeReviewCard  from './components/Cards';
// import RecipeReviewCard  from './components/Card2';

import { Box } from '@mui/system';


const theme = createTheme ({
  palette:{
    
    primary:{
      main: '#f48fb1'
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme ={theme}>
        <BrowserRouter>
          <Appbar/>
          
          <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>

              </Switch>
            <Box sx={{display:'flex',flexWrap: 'wrap', justifyContent:'center', }}>
            <RecipeReviewCard />
            </Box>
            <Box sx={{display:'flex',flexWrap: 'wrap', justifyContent:'center', }}>
            <Box/>
            </Box><Box sx={{display:'flex',flexWrap: 'wrap', justifyContent:'center', }}>
            <RecipeReviewCard/>
            </Box><Box sx={{display:'flex',flexWrap: 'wrap', justifyContent:'center', }}>
            <RecipeReviewCard/>
            </Box><Box sx={{display:'flex',flexWrap: 'wrap', justifyContent:'center', }}>
            <RecipeReviewCard/>
            </Box><Box sx={{display:'flex',flexWrap: 'wrap', justifyContent:'center', }}>
            <RecipeReviewCard/>
            </Box><Box sx={{display:'flex',flexWrap: 'wrap', justifyContent:'center', }}>
            <RecipeReviewCard/>
            </Box><Box sx={{display:'flex',flexWrap: 'wrap', justifyContent:'center', }}>
            <RecipeReviewCard/>
            </Box>
            <DividerText />   
            <Ske />
            <ImageMasonry />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
