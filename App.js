import REACT from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const AppFunction = () => {

  return(
    <SafeAreaProvider style={{backgroundColor: '#7F7F7F',}}>
      <SafeAreaView>
        <Text style={styles.con1}> Login</Text>
        <Text style={styles.con2}> 
          Username {'\n'}{'\n'}
          <TextInput style={{borderWidth: 1, width: '100%', autofocus:true}}></TextInput>
          {'\n'}{'\n'}{'\n'}{'\n'}
          Password{'\n'}{'\n'}
          <TextInput style={{borderWidth: 1, width: '100%',}}></TextInput>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>   
  );

};

const styles = {
  con1 : { 
    padding: 50,
    borderColor: 'black',
    // borderWidth: 5,
    textAlign: 'center',
    marginTop: '20%',
  },

  con2 : {
    padding: 50, 
    borderColor: 'black', 
    // borderWidth: 5, 
    margin: 5,
    borderRadius: 10,

  }
}

export default AppFunction;