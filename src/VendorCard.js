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
  const toggleFlip = () => setFlipped(!flipped);
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <Card className={classes.root} onClick={toggleFlip}>
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
            <Link href={"tel:"+vendor.phone} target="_blank" className={classes.link}>
              <PhoneIcon/> {vendor.phone}
            </Link>
            <Link href={"https://www.google.com/maps/search/?api=1&query="+vendor.address} target="_blank" className={classes.link}>
              <RoomIcon/> {vendor.address}
            </Link>
        </CardActions>
      </Card>
    </ReactCardFlip>
  );
}
