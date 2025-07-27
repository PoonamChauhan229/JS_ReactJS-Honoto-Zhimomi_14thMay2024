
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, reset, times} from './redux/CounterSlice'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import HideSourceIcon from '@mui/icons-material/HideSource';
import TimesOneMobiledataIcon from '@mui/icons-material/TimesOneMobiledata';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CardTest() {
    const value=useSelector((store)=>store.counter.value)

    const dispatch=useDispatch()
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image="https://cdn.pixabay.com/photo/2017/02/06/12/34/reptile-2042906_1280.jpg"
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
            {/* increment */}
            <IconButton color="secondary" aria-label=""
            onClick={()=>{
                dispatch(increment("test"));
            }}
            >
                <CrueltyFreeIcon sx={{fontSize:30}}/>
                <AddIcon sx={{ml:-2,mb:3.5,fontSize:30,fontWeight:900,color:"darkgreen"}}/>
            </IconButton>
            {/* decrement */}
            {value >0 && 
            <IconButton color="primary" aria-label=""
            onClick={()=>{
                dispatch(decrement("test2"));
            }}
            >
                <CrueltyFreeIcon color="secondary" sx={{fontSize:30}}/>
                <RemoveIcon sx={{ml:-2,mb:3.5,fontSize:30,fontWeight:900}}/>
            </IconButton>
}
            {/* Only needed when value >0 || not euql 0 */}
            {/* reset */}

            {value >0 && 
                <>
                    <IconButton color="error" aria-label=""
                    onClick={()=>{
                        dispatch(reset("test-reset"));
                    }}
                    >
                        <CrueltyFreeIcon color="secondary" sx={{fontSize:30}}/>
                        <HideSourceIcon sx={{ml:-2,mb:4,fontSize:25,fontWeight:900}}/>
                    </IconButton>
                    {/* times */}
                    <IconButton color='warning' aria-label=""
                    onClick={()=>{
                        dispatch(times());
                    }}
                    >
                        <CrueltyFreeIcon color="secondary" sx={{fontSize:30}}/>
                        <TimesOneMobiledataIcon sx={{ml:-1.5,mb:3.7,fontSize:30, fontWeight:900}}/>
                    </IconButton>
                </>
             }
            
        </CardActions>
        </Card>
    );
}

