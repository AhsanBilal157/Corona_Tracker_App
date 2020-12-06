import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//*********** CSS ***********/
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& > *": {
      paddingTop: 20,
      margin: theme.spacing(4),
      width: theme.spacing(38),
      height: theme.spacing(35),
    },
  },
}));

function Cards({ data: { confirmed, recovered, deaths, lastUpdate },  }) {
  const classes = useStyles();
  if (!confirmed) {
    return(
      <div className={classes.root}>
      <Paper elevation={5} style={{ backgroundColor: 'rgb(194, 4, 4)'}}>
        <br />
        <br />
        <Typography variant="h3" align="center" gutterBottom style={{ color: 'white'  }}>
         <br />
         <b>Loading... </b>
        </Typography>
        </Paper>
      <Paper elevation={5} style={{ backgroundColor: 'rgba(43, 139, 59, 0.931)' }}>
        <br />
        <br />
        <Typography variant="h3" align="center" gutterBottom style={{ color: 'white' }}>
        <br />
         <b>Loading... </b>
        </Typography>
      </Paper>
      <Paper elevation={5} style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
        <br />
        <br />
        <Typography variant="h3" align="center" gutterBottom style={{ color: 'white' }}>
        <br />
         <b>Loading... </b>
        </Typography>
        </Paper>
    </div>
     );
  }
  return (
    <div className={classes.root}>
      <Paper elevation={5} style={{ backgroundColor: 'rgb(194, 4, 4)'}}>
        <br />
        <Typography variant="h3" align="center" gutterBottom style={{ color: 'white'  }}>
         <b> Infected </b>
        </Typography>
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'white'  }}>
          <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
        <Typography variant="h5" align="center" gutterBottom style={{ color: 'white'  }}>
          {new Date(lastUpdate).toDateString()}<br />
          Number of active cases of Covid-19
        </Typography>
        </Typography>
      </Paper>

      <Paper elevation={5} style={{ backgroundColor: 'rgba(43, 139, 59, 0.931)' }}>
        <br />
      <Typography variant="h3" align="center" gutterBottom style={{ color: 'white'  }}>
         <b> Recovered </b>
        </Typography>
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'white'  }}>
          <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
        <Typography variant="h5" align="center" gutterBottom style={{ color: 'white'  }}>
          {new Date(lastUpdate).toDateString()}<br />
          Number of recoveries <br />from Covid-19
        </Typography>
        </Typography>
      </Paper>

      <Paper elevation={5} style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
        <br />
      <Typography variant="h3" align="center" gutterBottom style={{ color: 'white' }}>
         <b> Deaths </b>
         </Typography>
        <Typography  variant="h4" align="center" gutterBottom style={{ color: 'white'  }}>
          <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
        <Typography variant="h5" align="center" gutterBottom style={{ color: 'white'  }}>
          {new Date(lastUpdate).toDateString()}<br />
          Number of Deaths <br />caused by Covid-19
        </Typography>
        </Typography>
      </Paper>
    </div>
  );
}

export default Cards;