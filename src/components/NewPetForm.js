import React, { Component } from 'react';
import { 
  ActivityIndicator,
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Keyboard, 
  Button,
  Picker,
  RadioButtons,
  Switch
} from 'react-native';
import { Formik } from 'formik';
import { observer, observable, decorate } from 'mobx-react';

@observer export default class NewPetForm extends Component {

  render() {
    return (
      <View>
        <Formik
              initialValues={{
                name: '',
                color: '',
                breed: '',
                weight: '',
                isPetOwner: false
              }}

              validate={ values => {
                let errors = {}
                if (!values.name) {
                  errors.name = 'Required'
                }
                return errors
              }}

              onSubmit={(
                values, { setSubmitting, setErrors, resetForm }
              ) => {
                setTimeout(() => {
                  this.props.store.addPet(values)
                  resetForm({})
                  setSubmitting(false)
                }, 400)
              }}

              render={({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
                setFieldValue
              }) => (
                <View>
                  <Text style={styles.label}>What is the pet's name?</Text>
                  <TextInput 
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Enter the pet's name"
                    onChangeText={value => setFieldValue('name', value)}
                    // onBlur={() => setFieldTouched("name")}
                    onBlur={Keyboard.dismiss}
                    value={values.name}
                    style={styles.input}
                  />

                  <Text style={styles.label}>What is your pet's breed</Text>
                  <Picker
                    style={styles.picker}
                    selectedValue={values.breed}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue('breed', itemValue)
                    }
                    itemStyle={styles.pickerItem}
                  >
                    <Picker.Item label="Chihuaha" value="chihuahua" />
                    <Picker.Item label="Pitbull" value="pitbull" />
                  </Picker>

                  <Text style={styles.label}>Are you this pet's owner?</Text>
                  <Switch 
                    name="isPetOwner" 
                    value={values.isPetOwner}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue('isPetOwner', itemValue)
                    }
                  />

                  { isSubmitting ? (
                    <ActivityIndicator size="small" color="#00ff00" style={styles.indicator}/>
                  ) : (
                    <Button onPress={handleSubmit} title="Submit" />
                  )}
                </View>
              )}
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
  picker: {
    height: 50
  },
  pickerItem: {
    height: 40,
    fontSize: 15
  },
  label: {
    marginBottom: 5
  },
  input: {
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 0.5,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  indicator: {
    marginTop: 10
  }
});
