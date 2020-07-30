import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Category from './components/Category';
import { Grid, Typography } from '@material-ui/core';
import Products from './components/Products';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid container>
          <Grid item sm={2}><Category /></Grid>
          <Grid item sm={4}><Products /></Grid>
          <Grid item sm={2}><Typography>Hello World!</Typography></Grid>
          <Grid item sm={2}><Typography>Hello World!</Typography></Grid>
        </Grid>
        <Footer />
      </div>
    )
  }
}
