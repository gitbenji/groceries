import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TextInput,
  Text
} from 'react-native'
import { styles } from '../styles/index'

class ItemInput extends React.PureComponent {
  _onSubmit = (e) => {
    if (e.nativeEvent.text.length > 0) {
      this.props.addItem(e.nativeEvent.text)
      this.textInput.clear()
    }
  }

  render() {
    if (this.props.inputting) {
      return (
        <View>
          <TextInput
            autoFocus={true}
            ref={input => { this.textInput = input }}
            style={styles.textInput}
            onSubmitEditing={(e) => {
              this._onSubmit(e)
            }}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
        </View>
      )
    }
    return (
      <View>
        <Text
          style={styles.listText}
          onPress={this.props.toggleInputting}
        >
          +
        </Text>
      </View>
    )
  }
}

ItemInput.propTypes = {
  addItem: PropTypes.func.isRequired,
  inputting: PropTypes.bool.isRequired,
  toggleInputting: PropTypes.func.isRequired,
}

export default ItemInput