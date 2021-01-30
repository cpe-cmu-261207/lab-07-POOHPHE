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
import Switch from '@material-ui/core/Switch';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Input } from "@material-ui/core";




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
  },container: {
    display: 'flex',
  },
  paper: {
    alignItems:'center',
    maxWidth:'400px',
    margin: theme.spacing(1),
  },img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '200px',
   
  },
}));
function Gallery(){
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
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
            Gallery
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
              
              <Link href={'./contact'}>
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
        <br></br>
        <br></br>
        <br></br>
        
        <div style={{margin:'auto',width:'100px',textAlign:"center"}}>
          <Paper>
            <input type="checkbox" id="show" value="Submit" onChange={handleChange}/>
            <label for="show" style={{fontSize:'20px'}}> Show</label>
          </Paper>
          
        </div>
        <br></br>
        <br></br>
      <div className={classes.container}>
        <Fade in={checked}>
          <div>
            
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://wallpaperaccess.com/full/12561.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://i.pinimg.com/originals/52/e1/4d/52e14d2ca7e872dbb51252506377620b.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://wallpapercave.com/wp/wp3611699.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-103428/aurora-constellations-sky-nature-4k.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://wallpaperaccess.com/full/1182859.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://149493502.v2.pressablecdn.com/wp-content/uploads/2020/10/iphone-12-blue-wallpaper-light.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://newevolutiondesigns.com/images/freebies/4k-iphone-wallpaper-1.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://www.wallpapertip.com/wmimgs/137-1376321_iphone-11-stock-wallpaper-4k.png'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://www.backgroundscool.com/wp-content/uploads/2019/11/dfbbfde86596a6827a13d67a100db594.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://images.hdqwalls.com/download/ios-11-stock-original-4k-ij-750x1334.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://all-images.net/wp-content/uploads/2020/06/wallpaper-iphone-designer-312.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>
          <div style={{margin:"auto",width:"500px"}}>
            <img  src={'https://media.idownloadblog.com/wp-content/uploads/2018/12/snow-winter-car-night-nature-iphone-X.jpg'} style={{width:'200px',margin:'auto'}}/>
          </div>

          
          
        
          </div>
        
          
        </Fade>
      </div>
        </div>
    )
}
export default Gallery;