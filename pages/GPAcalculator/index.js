import CourseForm from "./components/CourseForm";
import { createContext, useEffect, useReducer, useState } from "react";
import CourseLists from "./components/CourseLists";
import CourseGrade from "./components/CourseGrade";
import { initialState, reducer } from "./utils/course-reducer";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ParticlesBg from 'particles-bg'
import Link from "next/link";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export const CourseContext = createContext({});
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display: 'flex',
  },
  form: {
    maxWidth: 275,
  },
  gridList: {
    width: 300,
    height: 600,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch course from localstroage
  function fetchCourse() {
    const localCourse = localStorage.getItem("myCourse");
    if (localCourse) {
      dispatch({
        type: "SET_COURSE",
        payload: JSON.parse(localCourse),
      });
    }
  }
  
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //use function fetchCourse() when page refresh and rendered
  useEffect(fetchCourse, []);

  useEffect(() => {
    localStorage.setItem("myCourse", JSON.stringify(state.myCourse));
  }, [state.myCourse]); //run when state.myCourse change


  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      <div >
      {/* <ParticlesBg color="#ffffff" num={150} type="cobweb" bg={true}/> */}
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            GPA Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          
          <Link href={'../'}>
            <h3 className="MainPageLink">MAIN</h3>
          </Link>
        </ListItem>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <Link href={'../portfolio'}>
                <h3 className="MainPageLink">PORTFOLIO</h3>
              </Link>
            </ListItem>
          <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <Link href={'../post'}>
                <h3 className="MainPageLink">DUMMY API</h3>
              </Link>
            </ListItem>
        </List>
        <Divider />
        <List>
          
            
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <Link href={'../portfolio/gallery'}>
                <h3 className="MainPageLink">GALLERY</h3>
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <Link href={'../portfolio/contact'}>
                <h3 className="MainPageLink">CONTACT</h3>
              </Link>
            </ListItem>
            
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
      <br></br>
      <br></br>
      <br></br>
        {/* <h1 class="glow">
          GPA CALCULATOR
        </h1> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div align="center">
                <Card variant="outlined" className={classes.form}>
                  <Paper  elevation={3} />
                  <CourseForm courses={state.myCourse}/>
                </Card>
                <br/>
                <Card variant="outlined" className={classes.form}>
                  <Paper elevation={3} />
                <CourseGrade courses={state.myCourse}/>
                </Card>
              </div>

            </Grid>
            <Grid item xs={12} sm={6}>
              
              <GridList style={{paddingLeft:25}} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 100 }}>
                  <h3 class="small-glow">My courses</h3>
                </GridListTile>
                <CourseLists courses={state.myCourse} />
              </GridList>
            
            </Grid>
          </Grid>
          
      </div>
    </CourseContext.Provider>
  );
}

export default App;
