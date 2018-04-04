import { connect } from 'react-redux'
import { addItem, toggleInputting } from '../actions'
import ItemInput from '../components/ItemInput'

const mapStateToProps = state => ({
  inputting: state.ui.inputting
})

const mapDispatchToProps = dispatch => ({
  addItem: id => dispatch(addItem(id)),
  toggleInputting: _ => dispatch(toggleInputting(_)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemInput)