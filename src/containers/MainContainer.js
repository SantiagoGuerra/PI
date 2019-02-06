import Main from '../components/Main'
import { connect } from 'react-redux'

import {buttonSelectedAction} from '../actions/'

const mapState = state => ({
  ui: state.ui
})

const mapDispatch = dispatch => ({
  buttonSelected: name => dispatch(buttonSelectedAction(name))
})

const MainContainer = connect(
  mapState,
  mapDispatch
)(Main)

export default MainContainer