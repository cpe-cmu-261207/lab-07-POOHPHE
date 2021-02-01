import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react';
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
import Link from "next/link";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 400,
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
const baseURL = 'https://dummyapi.io/data/api'
const appID = '600b933802fab9402963a47e'

const Post = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    useEffect(() => getData()
    , [])

    async function getData(){
        const res1 = await axios.get(`${baseURL}/post/${postId}`, { headers: { "app-id": appID }})
        const res2 = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { "app-id": appID }})
        
        setPost(res1.data)
        setComment(res2.data.data)
    }
    
    function renderPost(){
        if(post){
            return (
                <div>
                    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={post.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {post.text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          tag : {post.tags.join()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <ThumbUpAltIcon/> {post.likes}
        </Button>
        
      </CardActions>
    </Card>
                    
                </div>
            )
        }
        else{
            return <></>
        }
    }

    function renderComment(){
        return comment.map((cmt) => {
         return (
             <div className={classes.root} style={{textAlign:"center"}}>
         <Card key={cmt.id}>

            <Paper className="tag-cmt">
                
                <h4>
                {cmt.owner.firstName} {cmt.owner.lastName}
                </h4>
                <p>{cmt.message}</p>
            </Paper>
        </Card>
            <br></br>
        </div>
        )})
    }

    if(post){
        return (
            <>
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
            Post Detail
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
          
          <Link href={'./portfolio/'}>
            <h3 className="MainPageLink">PORTFOLIO</h3>
          </Link>
        </ListItem>
          <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <Link href={'./'}>
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
      <br></br>
                <div className="header">
                    
                </div>
                <div>
                    
                    
                <div style={{margin:"auto",width:"350px"}}>
                    {renderPost()}
                    <br></br>
                    {renderComment()}
                </div>
                </div>
                
            </>
        );
    }
    else{
        return (
            <><CssBaseline />
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
                  Waiting
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
          
          <Link href={'./portfolio/'}>
            <h3 className="MainPageLink">PORTFOLIO</h3>
          </Link>
        </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    
                    <Link href={'./'}>
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
            <div className="loader-container">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="loader" style={{textAlign:"center"}}><AutorenewIcon color="primary" s style={{ fontSize: 100 }}/></div>
            </div>   
            </>
        );
    }
}

export  default  Post

