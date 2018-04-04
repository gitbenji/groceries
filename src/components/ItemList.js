import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import {
  View,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from '../styles/index'

class ItemList extends React.PureComponent {
  _keyExtractor = (item, index) => item.id.toString()

  _onLongPressItem = (id, text) => {
    Alert.alert(
      'Would you like to delete "' + text + id + '" from this list?',
      '',
      [
        {text: 'Delete', onPress: () => this.props.removeItem(id), style: 'destructive'},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
      ]
    )
  }
  _renderItem = ({item}) => (
    <Item
      id={item.id}
      text={item.text}
      onPressItem={() => this.props.toggleItem(item.id)}
      onLongPressItem={() => this._onLongPressItem(item.id, item.text)}
      ownerHas={item.ownerHas}
    />
  )

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={this.props.items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    ownerHas: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default ItemList