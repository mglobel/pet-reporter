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

import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

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

const App: () => React$Node = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Pet's Near You</Text>
          <NewPetForm store={PetStore} navigation={navigation}/>
        </View>
      </SafeAreaView>
    </>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      headerTitle: 'Pet Reporter Form'
    }
  },
  PetForm: {
    screen: NewPetForm
  },
  PetList: {
    screen: PetList
  },
  initialRouteName: 'NewPetForm'
})


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

// export default App;
export default createAppContainer(AppNavigator);
