import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import ReactCardFlip from 'react-card-flip';
import Link from '@material-ui/core/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const rotation = "rotateX(5deg) rotateY(5deg)";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
    'border-radius': '25px',
    [theme.breakpoints.down('sm')]: {
      height: 189,
      width: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 315,
      width: 500,
    }
  },
  hovered: {
    transform: rotation,
    webkitTransform: rotation,
    mozTransform: rotation,
    msTransform: rotation,
    oTransform: rotation,
  },
  media: {
    width: 'auto',
    maxWidth: '95%',
    float: 'right',
    margin: 10,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 50,
    },
    [theme.breakpoints.up('md')]: {
      maxHeight: 140,
    }
  },
  link: {
    fontSize: '12pt',
  }
}));

export default function VendorCard({vendor}) {
  const classes = useStyles();
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const toggleFlip = () => {
    setHovered(false);
    setFlipped(!flipped);
  }
  const toggleHover = () => {
    if(!flipped) {
      setHovered(!hovered);
    }
  }
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <Card 
        className={hovered?`${classes.root} ${classes.hovered}`:classes.root} 
        onMouseEnter={toggleHover} onMouseLeave={toggleHover}
        onTouchStart={toggleHover} onTouchEnd={toggleHover}
        onClick={toggleFlip}  
        >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            image={vendor.logoUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {vendor.name}
            </Typography>
            <Typography variant="body2" component="p">
              {vendor.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href={vendor.url} target="_blank" className={classes.link}>
            {vendor.url}
            <OpenInNewIcon className={classes.link}/>
          </Link>
        </CardActions>
      </Card>
      <Card className={classes.root} onClick={toggleFlip}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" component="p">
              {vendor.details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Grid container>
              <Grid item sm={12} md={6}>
                <Link href={"tel:"+vendor.phone} target="_blank" className={classes.link}>
                  <PhoneIcon/> {vendor.phone}
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link href={"https://www.google.com/maps/search/?api=1&query="+vendor.address} target="_blank" className={classes.link}>
                  <RoomIcon/> {vendor.address}
                </Link>
              </Grid>
            </Grid>
        </CardActions>
      </Card>
    </ReactCardFlip>
  );
}
