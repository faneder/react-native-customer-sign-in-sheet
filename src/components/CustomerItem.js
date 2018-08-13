import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class CustomerItem extends Component {
  onRowPress() {
    Actions.customerEdit({ customer: this.props.customer })
  }

  render() {
    const { name, phone } = this.props.customer;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <View style={styles.container}>
              <View>
                <Text style={styles.titleStyle}>
                  {name}
                </Text>
              </View>
              <View>
                <Text>
                  {phone}
                </Text>
              </View>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15
  },
  titleStyle: {
    fontSize: 18,
    marginBottom: 5
  }
}

export default CustomerItem;