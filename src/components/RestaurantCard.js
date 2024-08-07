import { CDN_URL } from "../utils/constants";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData;
  const { deliveryTime } = resData?.sla;

  return (
    <Grid container wrap="nowrap" spacing={2} columns={16}>
      <Grid item xs zeroMinWidth>
        <Card style={{ backgroundColor: "skyblue" }} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 140 }}
              image={CDN_URL + resData.cloudinaryImageId}
              title={name}
            />
            <CardContent>
              <Typography noWrap>{name} </Typography>
              <Typography noWrap>{cuisines.join(",")} </Typography>
              <Typography>{avgRating} stars</Typography>
              <Typography>{costForTwo}</Typography>
              <Typography>{deliveryTime} minutes </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RestaurantCard;
