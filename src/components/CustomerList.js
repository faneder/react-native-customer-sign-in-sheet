import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Spinner, CardSection } from './common';
import { customerFetch } from '../actions';
import CustomerItem from './CustomerItem';

class CustomerList extends Component {
  componentWillMount() {
    this.props.customerFetch();

    this.createDataSource(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps)
  }
  
  createDataSource({customer}) {
    if (customer) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(customer);
    }
  }

  renderRow(customer, secId, uid) {
    const data = {...customer, uid};

    return <CustomerItem customer={{...customer, uid}} />;
  }

  renderView() {
    if (this.props.customer) {
      return (
        <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow} />
      );
    }

    return (
      <View style={styles.dataEmptyContainer}>
        <Text style={styles.dataEmptyText}>No data</Text>
      </View>
    )
  }

  render () {
    return (
      !this.props.loading ? (
        this.renderView()
      ) : <Spinner size="large" />
    );
  } 
}

const styles = {
  dataEmptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataEmptyText: {
    fontSize: 20
  }
}
const mapStateToProps = state => {
  const { customer } = state.customer;

  return { customer: customer };
};

export default connect (mapStateToProps, {
  customerFetch,
})(CustomerList);