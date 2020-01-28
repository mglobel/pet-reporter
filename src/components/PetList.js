import React, { Component } from 'react';
import { 
  View, Text, StyleSheet, TextInput, Keyboard, Button, FlatList, Item
} from 'react-native';
import { observer, observable, decorate } from 'mobx-react';

@observer export default class PetList extends Component {

  render() {
    return (
      <View>
        <FlatList
          data={this.props.store.pets.slice()}
          renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
          keyExtractor={(item, index) => item.name + index}
        />
      </View>
    )
  }   
}


const styles = StyleSheet.create({
  form: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#D8D8D8',
    padding: 10
  },
  input: {
    marginTop: 5,
    borderRadius: 2,
    borderWidth: 0.5,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10
  }
});
