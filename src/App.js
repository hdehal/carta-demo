import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>

      <Header />

      <div className="paperRoot">
        <Grid container spacing={2}>

          <Paper className={classes.paper} id="paperGrant">
          </Paper>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} >
            </Paper>
          </Grid>

        </Grid>
      </div>

    </BrowserRouter>
  );
}

export default App;