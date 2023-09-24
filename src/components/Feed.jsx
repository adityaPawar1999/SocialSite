import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function RecipeReviewCard() {
  return (
    <Box flex={4}>
    <Card sx={{ maxWidth: 845 }}>
      <CardHeader
        avatar={
          <Avatar src="http://www.onlinemarketinginstitute.org/wp-content/uploads/2013/07/FacebookCoverPhoto51.jpg" aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="aditya Pawar"
        subheader="September 24, 2023"
      />
      <CardMedia
        component="img"
        height="400"
        image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        "Savoring the Warm Embrace of Coffee ☕",<br />
        A steaming cup of coffee on a chilly morning is like a comforting hug for the soul.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
      </Card>
      <br/>
    <Card sx={{ maxWidth: 845 }}>
      <CardHeader
        avatar={
          <Avatar  src="https://www.traveldailymedia.com/assets/2023/09/paradox-museum-las-vegas-color-shadows-room_53039324758_o-1024x657.jpg"  aria-label="recipe">         
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 24, 2023"
      />
      <CardMedia
        component="img"
        height="400"
        image="https://www.traveldailymedia.com/assets/2023/09/paradox-museum-las-vegas-color-shadows-room_53039324758_o-1024x657.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        "Two Hearts, One Vegas Adventure 💃🌆"<br/>
        "When you have your best friend by your side, every moment becomes an unforgettable adventure. From the dazzling lights of the Strip to the endless laughter and late-night escapades, we're making memories in Las Vegas that will last a lifetime. Here's to friendship, fun, and fabulous nights in Sin City!"
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
<br/>

  <Card sx={{ maxWidth: 845 }}>
      <CardHeader
        avatar={
          <Avatar  src="https://i.pinimg.com/originals/5a/21/1f/5a211fb528a348e99f07a146a0be47fa.jpg"  aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chorizo Paella"
        subheader="September 20, 2023"
      />
      <CardMedia
        component="img"
        height="400"
        image="https://tse3.mm.bing.net/th?id=OIP.a430Gb1ms8_EypISoh_ckAHaF7&pid=Api&P=0&h=180"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Street Photo of old man<br/>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    
    </Box>
  );
}
