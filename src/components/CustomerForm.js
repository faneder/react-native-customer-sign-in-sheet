import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { customerUpdate } from '../actions';

class CustomerForm extends Component {
  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render () {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Enter Name"
            value={this.props.name}
            onChangeText={value =>
              this.props.customerUpdate({ prop: 'name', value: value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="0982888999"
            value={this.props.phone}
            onChangeText={value =>
              this.props.customerUpdate({ prop: 'phone', value: value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText={value =>
              this.props.customerUpdate({ prop: 'email', value: value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Line"
            placeholder="line id"
            value={this.props.line}
            onChangeText={value =>
              this.props.customerUpdate({ prop: 'line', value: value })}
          />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyle}>Gender</Text>
          <Picker
            selectedValue={this.props.gender}
            onValueChange={value =>
              this.props.customerUpdate({ prop: 'gender', value: value })}
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </CardSection>
        <CardSection>
					{this.renderError()}
        </CardSection>
			</View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  return {...state.customerForm};
};

export default connect (mapStateToProps, {
  customerUpdate,
})(CustomerForm);
