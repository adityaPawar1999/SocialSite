import { Box, AvatarGroup, Avatar, Typography ,ImageList ,ImageListItem,ListItemButton ,ListItemText} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import React from "react";


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIF.2DnHON1aVAGPvWcDkTCJcw&pid=Api&P=0&h=180",
      title: 'Camera',
    }
]
const RightBar = () => {
    return (<>
        <Box flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography sx={{
                paddingTop: 3,
                fontSize: 20,
                color: 'gray',
            }}
            >Online Friends</Typography>
            <AvatarGroup max={4} sx={{
                paddingTop: 2,
                display: 'flex',
                justifyContent: 'left'
            }}>
                <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/5a/21/1f/5a211fb528a348e99f07a146a0be47fa.jpg" />
                <Avatar alt="Travis Howard" src="https://instaloverz.com/wp-content/uploads/2016/07/23-mens-fashion-fall.jpg" />
                <Avatar alt="Cindy Baker" src="https://imgix.ranker.com/list_img_v2/15607/2435607/original/indian-people-facebook?w=817&h=427&fm=jpg&q=50&fit=crop" />
                <Avatar alt="Agnes Walker" src="http://www.onlinemarketinginstitute.org/wp-content/uploads/2013/07/FacebookCoverPhoto51.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>


    <Card sx={{ maxWidth: 345,marginTop:2 }}>
        <ListItemButton>
                <ListItemText  sx={{
                    paddingLeft:3 ,
                    fontWeight:600}}><b>Stream Box</b></ListItemText>
                    <MenuIcon/>
                </ListItemButton>

      <CardMedia
        sx={{ height: 140 }}
        image="https://wallpapercave.com/wp/wp1811282.png"
        title="green iguana"
      />
      <CardContent>
        <Typography><b>The Last Of Us</b></Typography>
        <Typography  color="text.secondary" fontSize={13} paddingTop={1}>
         hey guys , Am playing THE LAST OF US now join me to watch this awesome gameplay
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Join Now</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>






            <Typography sx={{
                paddingTop: 5,
                fontSize: 20,
                color: 'gray',
            }}
            >Latest Photos</Typography>
            <ImageList sx={{ width: 390, height: 400 ,paddingTop:3}} cols={3} rowHeight={159}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>


        </Box>
    </>)
}
export default RightBar;