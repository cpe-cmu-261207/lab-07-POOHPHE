import Link from "next/link";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
import {useEffect,useState} from 'react';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
function Contact(){
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        
        <div className={classes.root}>
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
            Contact
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
              
              <Link href={'./'}>
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
              
              <Link href={'./gallery'}>
                <h3 className="MainPageLink">GALLERY</h3>
              </Link>
            </ListItem>
            
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <Link href={'../GPAcalculator'}> 
                <h3 className="MainPageLink">GPA CALCULATOR</h3>
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
      <br></br>
      <br></br>
      <div style={{margin:'auto',width:'500px'}}>

        <form  style={{backgroundColor:"lightblue"}}>
            <div >
              <div >
                <label for="name">Your Name </label>
                <input type="text"  id="name"/>
              </div>
              <div>
                  <label for="email">Your Email </label>
                  <input type="email" id="email" />      
              </div>
            </div>
            <div >
            <div >
                <label for="subject">Subject </label>
                <input type="text" class="form-control" id="subject"/>
              </div>
            </div>
            
            <div >
                <label for="exampleFormControlTextarea1">Your Message</label>
                <textarea  id="exampleFormControlTextarea1" rows="3">Hello</textarea>
              </div>
              <div style={{textAlign:"center"}} >
              <button type="submit" >SEND</button>
              

                </div>
          </form> 
      </div>
        </div>
    )
}
export default Contact;