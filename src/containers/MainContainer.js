import Main from '../components/Main'
import { connect } from 'react-redux'

import {buttonSelectedAction, requestMessage, dataType, dataNumber} from '../actions/'

const mapState = state => ({
  ui: state.ui,
  message: state.message,
  data: state.data
})

const mapDispatch = dispatch => ({
  buttonSelected: name => dispatch(buttonSelectedAction(name)),
  request: (number, type) => dispatch(requestMessage(number, type)),
  dataCategory: category => dispatch(dataType(category)),
  changeInputNumber: number => dispatch(dataNumber(number))
})

const MainContainer = connect(
  mapState,
  mapDispatch
)(Main)

export default MainContainer