import React, { Component } from 'react'
import loading from './loading.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" height="40" width="40"/>
      </div>
    )
  }
}

export default Loading