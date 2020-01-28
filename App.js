/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Formik } from 'formik';

import NewPetForm from './src/components/NewPetForm'
import PetList from './src/components/PetList'

import PetStore from './src/store/PetStore'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Pet's Near You</Text>
          <NewPetForm store={PetStore} />
          <PetList store={PetStore} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: "center"
  },  
  container: {
    backgroundColor: Colors.lighter,
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default App;
