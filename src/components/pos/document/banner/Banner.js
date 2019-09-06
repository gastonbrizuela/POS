import React from "react";

/* Material-UI Components */
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1)
  },
  carousel: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1, 1, 1, 1)
  },
  image: {
    width: "auto",
    maxHeight: "25vh"
  }
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Banner = ({ index, handleChangeIndex, images }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.carousel}>
          <AutoPlaySwipeableViews
            index={index}
            onChangeIndex={handleChangeIndex}
            interval={5000}
          >
            {images &&
              images.map((image, index) => (
                <img
                  src={image}
                  alt={image}
                  className={classes.image}
                  key={index}
                />
              ))}
          </AutoPlaySwipeableViews>
        </div>
      </CardContent>
    </Card>
  );
};

export default Banner;
