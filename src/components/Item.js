import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { styles } from '../styles/index'

class Item extends React.PureComponent {
  render() {
    const textColor = this.props.ownerHas ? "black" : "gray"
    return (
      <TouchableOpacity onPress={this.props.onPressItem} onLongPress={() => this.props.onLongPressItem(this.props.text)}>
        <View>
          <Text 
            style={[styles.listText, {color: textColor}]}
          >
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Item.propTypes = {
  onPressItem: PropTypes.func.isRequired,
  onLongPressItem: PropTypes.func.isRequired,
  ownerHas: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Item