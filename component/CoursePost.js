import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CoursePost = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="postTemplate" style={{textAlign:"center"}}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          tag : {props.tags.join()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <ThumbUpAltIcon/> {props.likes}
        </Button>
        <Button size="small" color="primary">
        <Link className="survey_btn" href={`./post/${props.id}`}><Button variant="contained" color="primary">
  GO TO THIS PAGE
</Button>
              
            </Link>
        </Button>
      </CardActions>
    </Card>
            <br></br>
      </div>
    </>
  );
};

export default CoursePost;