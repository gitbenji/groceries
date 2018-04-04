import { connect } from 'react-redux'
import { toggleItem, removeItem } from '../actions'
import ItemList from '../components/ItemList'

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  toggleItem: id => dispatch(toggleItem(id)),
  removeItem: id => dispatch(removeItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)