import Link from "next/link";
import React from 'react';
import {useEffect,useState} from 'react';

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
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
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

function Profile(){
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
            Home Page
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
              
              <Link href={'../post'}>
                <h3 className="MainPageLink">DUMMY API</h3>
              </Link>
            </ListItem>
        </List>
        <Divider />
        <List>
          
            
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <Link href={'./portfolio/gallery'}>
                <h3 className="MainPageLink">GALLERY</h3>
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <Link href={'./portfolio/contact'}>
                <h3 className="MainPageLink">CONTACT</h3>
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
        <Grid container spacing={3}>
           
           <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <img className={classes.img} src={'https://cpe-cmu-261207.github.io/lab-02-POOHPHE/profile.jpg'} alt="Profile" />
                </Paper>
           </Grid>
           <Grid item xs={12} sm={6}>
               <Paper className={classes.paper}>xs</Paper>
           </Grid>
       </Grid>
       <br></br>
       <Grid container spacing={3}>
           
          
           
       </Grid>
   </div>
        )
}
export default Profile;