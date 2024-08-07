import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
const Shimmer = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(18)).map((_, index) => (
        <Grid item xs={2} sm={4} md={2} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia sx={{ height: 140 }} image="name" />
              <CardContent>
                <Typography noWrap>Cusines</Typography>
                <Typography>Average Rating Stars</Typography>
                <Typography>Cost for Two</Typography>
                <Typography>Delivery time minutes </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>{" "}
        </Grid>
      ))}
    </Grid>
  );
};

export default Shimmer;
