import React from "react";

/* Material-UI Components */
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Divider,
  Typography,
  Tooltip,
  Button,
  Zoom
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1)
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  marginVertical: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  blockButtons: {
    display: "block"
  }
}));

const DataSheet = ({
  customer: {
    name,
    type,
    status,
    branch,
    address,
    email,
    phone,
    keep,
    debt,
    spent
  }
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Detalle del cliente
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`${type} (${status})`}
        </Typography>
        <Divider className={classes.marginVertical} />
        <Typography variant="body2" component="p">
          {`Sucursal ${branch}`}
        </Typography>
        <Typography variant="body2" component="p">
          {address}
        </Typography>
        <Typography variant="body2" component="p">
          {email}
        </Typography>
        <Typography variant="body2" component="p">
          {phone}
        </Typography>
        <Divider className={classes.marginVertical} />
        <Typography
          variant="body2"
          component="p"
          color={keep ? "primary" : "secondary"}
        >
          {keep
            ? "Mantiene la actividad en la campaña"
            : "Revendedora en peligro"}
        </Typography>
        {debt && (
          <Typography variant="body2" component="p">
            {`Adeuda $ ${debt}`}
          </Typography>
        )}
        <Typography variant="body2" component="p">
          {`Lleva gastado $ ${spent}`}
        </Typography>
      </CardContent>
      <CardActions className={classes.blockButtons}>
        <Grid item xs={12} sm={12}>
          <Tooltip
            TransitionComponent={Zoom}
            title="El cliente pertenece a otra sucursal"
          >
            <Button size="small" fullWidth variant="contained" color="primary">
              Solicitar cambio de sucursal
            </Button>
          </Tooltip>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default DataSheet;
