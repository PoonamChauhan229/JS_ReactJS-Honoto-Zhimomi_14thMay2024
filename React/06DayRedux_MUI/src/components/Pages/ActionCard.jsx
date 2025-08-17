import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useDispatch } from "react-redux";
import { addToCart, emptyCart } from "../redux/cartSlice";


export default function ActionCard({ title, producer, poster,element}) {
  const theme = useTheme();
  const dispatch=useDispatch()

  return (
    <Card sx={{ display: "flex", width: "300px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {producer}
          </Typography>
          {/* Actions  */}
          <Typography>
            <IconButton aria-label="" onClick={() => {
              // console.log("Btn",element)
              dispatch(addToCart(element))
            }}>
              <AddShoppingCartIcon color="secondary" sx={{ fontSize: 23 }} />
            </IconButton>
            <IconButton aria-label="" onClick={() => {}}>
              <RemoveShoppingCartIcon color="primary" sx={{ fontSize: 23 }} />
            </IconButton>
            <IconButton aria-label="" onClick={() => {
              dispatch(emptyCart())
            }}>
              <ProductionQuantityLimitsIcon color="warning" sx={{ fontSize: 23 }} />
            </IconButton>
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={poster}
        alt="Live from space album cover"
      />
    </Card>
  );
}
