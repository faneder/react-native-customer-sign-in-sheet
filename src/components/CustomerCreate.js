import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Spinner } from './common';
import { customerCreate, customerInit } from '../actions';
import CustomerForm from './CustomerForm';

class CustomerCreate extends Component {
  componentWillMount() {
    this.props.customerInit();
  }

  onButtonPress() {
    const { name, phone, email, line, gender } = this.props;

    this.props.customerCreate({name, phone, email, line, gender: gender || 'male'});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Create
      </Button>
    );
  }

  render () {
    return (
      <Card>
        <CustomerForm {...this.props}/>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {...state.customerForm};
};

export default connect (mapStateToProps, {
  customerCreate,
  customerInit
})(CustomerCreate);
