import React, {Component} from 'react'
import Landing from './landing'
import {Grid} from 'react-bootstrap';
import Link from 'react-router'


class Welcome extends Component {
  render() {
    return (
      <div>
        <Grid>
          {Landing()}
        </Grid>
      </div>  
    )
  }
}

export default Welcome;