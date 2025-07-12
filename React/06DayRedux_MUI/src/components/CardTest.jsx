import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CrueltyFreeSharpIcon from '@mui/icons-material/CrueltyFreeSharp';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function CardTest() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c4.wallpaperflare.com/wallpaper/1000/393/100/reptile-chameleon-green-3d-wallpaper-preview.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
       
        <IconButton color="secondary" aria-label="">
        <CrueltyFreeSharpIcon sx={{fontSize: 30}}/>
        <AddIcon sx={{ml:-2,mb:3,fontSize: 30}} />
      </IconButton>
        
      </CardActions>
    </Card>
  );
}
