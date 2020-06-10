import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Form from './components/form';
import Grant from './components/grant';
import PieChart from './components/pieChart';
import LineGraph from './components/lineGraph';

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
            <Grant />
          </Paper>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <PieChart />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <LineGraph />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} >
              <Form />
            </Paper>
          </Grid>

        </Grid>
      </div>

    </BrowserRouter>
  );
}

export default App;