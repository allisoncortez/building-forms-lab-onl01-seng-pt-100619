import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux'

//acts as: connection to the Redux store // child of App 

// The dispatched action required to initiate this update
// should be set up in BandsContainer and passed down as the prop addBand
// to BandInput.

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={ this.props.bands }/>
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})

// takes in dispatch as an argument
// It then returns an object that contains a function as a value!
const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band})
})

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

export default connect (mapStateToProps, mapDispatchToProps) (BandsContainer)

// we can pass connect() a second argument, and add our action creator as props