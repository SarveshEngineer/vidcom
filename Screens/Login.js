// import React from 'react';
// import {Text, View} from 'react-native';

// export default function Login() {
//   return (
//     <View>

//     </View>
//   );
// }

//
import React from 'react';

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),

  password: yup.string().min(6).required(),
});

export default function LoginScreen() {
  const handleLogin = values => {
    fetch('https://api.example.com/login', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(values),
    })
      .then(response => {
        if (response.ok) {
          // redirect to home screen
        } else {
          throw new Error('Invalid credentials');
        }
      })

      .catch(error => {
        console.error(error); // show error message to user
      });
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text>VidCom▶️</Text>
        {/* <Icon name="play" size={50} color="black"></Icon> */}
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#456aa3',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 10,
              }}
              onPress={handleSubmit}>
              <Text
                style={{color: 'white', fontSize: 20}}
                numberOfLines={1}
                ellipsizeMode="clip">
                Login
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  input: {
    borderWidth: 1,

    borderColor: '#ccc',

    padding: 10,

    marginVertical: 10,

    borderRadius: 5,

    width: '100%',
  },

  error: {
    color: 'red',

    marginBottom: 5,
  },
});
