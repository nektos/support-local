import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VendorCard from './VendorCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
}));

const _VENDORS = [
  {
    id: "1",
    name: "Folsom Tap House",
    summary: "A casual neighborhood bar and grill specializing in craft beers throughout the US.",
    phone: "916-555-2020",
    url: "https://folsomtaphouse.com",
    logoUrl: "https://assets.locable.com/r/logo_jumbo/images/1446/attachments-original-1445031473-Folsom_Tap_House_Logo.png",
    address: "25005 Blue Ravine Rd. #140",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "2",
    name: "Mexquite",
    summary: "Regional mexican cuisine & tequila lounge.",
    phone: "916-555-1010",
    url: "https://mexquite.com",
    logoUrl: "https://mexquite.com/wp-content/uploads/2017/04/logo.png",
    address: "25095 Blue Ravine Rd.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "3",
    name: "Hisui",
    summary: "Combining traditional cuisine with a creative & contemporary flair, we focus on serving our foods in a health conscious manner.",
    phone: "916-555-9000",
    url: "http://hisuisushi.com",
    logoUrl: "http://hisuisushi.com/wp-content/uploads/2015/10/Hisui-Sushi.png",
    address: "25004 Blue Ravine Rd #107",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "4",
    name: "Reset Folsom",
    summary: "Historic Folsom’s Premier Third Wave Coffee House and Wine & Beer Bar",
    phone: "916-555-9000",
    url: "https://resetfolsom.com/",
    logoUrl: "https://chambermaster.blob.core.windows.net/images/customers/486/members/7863/logos/MEMBER_PAGE_HEADER/reset.logo.transparent.png",
    address: "727 Sutter Street, Ste. B",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "5",
    name: "Back Bistro",
    summary: "Folsom's premier local bistro!",
    phone: "916-555-9000",
    url: "https://backbistro.com/",
    logoUrl: "https://secureservercdn.net/198.71.233.65/bxi.51e.myftpupload.com/wp-content/uploads/2019/01/BackBistro_logo-300.jpg",
    address: "230 Palladio Pkw Ste 1201",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function VendorList() {
  const [vendors, setVendors] = useState(shuffle(_VENDORS));
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2} justify="center">
      <Grid item xs={8}>
        <Grid container spacing={2}>
          {vendors.map(vendor => <VendorCard  key={vendor.id} vendor={vendor}/>)}
        </Grid>
      </Grid>
    </Grid>
  );
}
