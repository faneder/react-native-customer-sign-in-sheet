import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Spinner, Modal } from './common';
import { customerUpdate, customerEdit, customerDelete } from '../actions';
import CustomerForm from './CustomerForm';

class CustomerEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    for (let prop in this.props.customer) {
      const value = this.props.customer[prop];

      this.props.customerUpdate({ prop, value })
    }
  }
  
  onButtonPress() {
    const { name, phone, email, line, gender, uid } = this.props;

    this.props.customerEdit({name, phone, email, line, gender, uid});
  }

  onTextPress() {
    const { name, phone } = this.props;

    Communications.text(phone, `Hi ${name}, Our products that are on sale`);
  }
  
  onAccept() {
    const { uid } = this.props.customer;

    this.props.customerDelete({ uid });
  }
  
  onDecline() {
    this.setState({ showModal: false });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Save Changes
      </Button>
    );
  }

  render () {
    return (
      <ScrollView>
        <Card>
          <CustomerForm />
          <CardSection>
            {this.renderButton()}
          </CardSection>
          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}>
              Text Schedule
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal})}>
              Delete Customer
            </Button>
          </CardSection>
          <Modal
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete
          </Modal>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {...state.customerForm};
};

export default connect (mapStateToProps, {
  customerUpdate,
  customerEdit,
  customerDelete,
})(CustomerEdit);
