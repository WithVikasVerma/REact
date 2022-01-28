import './App.css';
import Body from "./components/Body";
import Appbar from "./components/Appbar"
import { Switch,Route, BrowserRouter} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {createTheme, ThemeProvider} from '@material-ui/core'
import DividerText from './components/Divider';
import Ske from './components/Skeleton';
import TemporaryDrawer from './components/Sidebar';
import ImageMasonry from './components/Masonry';


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
            <Body />
            <TemporaryDrawer />
            <DividerText />   
            <Ske />
            <ImageMasonry />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
