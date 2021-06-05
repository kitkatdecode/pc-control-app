import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  const [ip, setIp] = useState('192.168.15.153:5000');
  const [temp, setTemp] = useState('');

  useEffect(() => {
    readData()
  }, [])

  // read data
  const readData = async () => {
    try {
      const ip_add = await AsyncStorage.getItem('@IP_KEY');
      if (ip_add !== null) {
        setIp(ip_add);
      } else {
        saveData(ip);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage: '+e);
    }
  }

  // save data

  const saveData = async (ip) => {
    try {
      await AsyncStorage.setItem('@IP_KEY', ip);
      setIp(ip);
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage: '+e);
    }
  }

  const handleChange = (ip_address) => {
      setTemp(ip_address);
  }

  const handleSubmit = () => {
    if(temp.length > 0){
      saveData(temp);
    }
  }

  const upButtonHandle = () => {
    let url = "http://"+ip+"/up";
    fetch(url, {
        method: 'PUT'
    }).catch((error) => {
      alert(error);
    });
  }

  const downButtonHandle = () => {
    let url = "http://"+ip+"/down";
    fetch(url, {
        method: 'PUT'
    }).catch((error) => {
      alert(error);
    });
  }

  const rightButtonHandle = () => {
    let url = "http://"+ip+"/right";
    fetch(url, {
        method: 'PUT'
    }).catch((error) => {
      alert(error);
    });
  }

  const leftButtonHandle = () => {
    let url = "http://"+ip+"/left";
    fetch(url, {
        method: 'PUT'
    }).catch((error) => {
      alert(error);
    });
  }

  const centerButtonHandle = () => {
    let url = "http://"+ip+"/center";
    fetch(url, {
        method: 'PUT'
    }).catch((error) => {
      alert(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>Change IP address if connection failed</Text>
      <View style={styles.inputBox}>
      <TextInput 
          style={styles.textInput} 
          keyboardType='default'
          placeholder={ip}
          onChangeText={(val) => handleChange(val)} 
          value={temp}
      />
      <View style={styles.button}>
      <TouchableOpacity onPress={handleSubmit} >
          <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      </View>
      </View>
      
      <View style={styles.vertical}>
        <TouchableOpacity onPress={upButtonHandle}>
          <View style={styles.upButton}> 
            <MaterialIcons name="arrow-drop-up" size={60} color="white" />
          </View>
        </TouchableOpacity>

        <View style={styles.horizontal}>
          <TouchableOpacity onPress={leftButtonHandle}>
            <View style={styles.leftButton}>
              <MaterialIcons name="arrow-left" size={60} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={centerButtonHandle}>
            <View style={styles.circle}>
              <MaterialIcons name="play-circle-outline" size={60} color="white"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={rightButtonHandle}>
            <View style={styles.rightButton}>
              <MaterialIcons name="arrow-right" size={60} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={downButtonHandle}>
          <View style={styles.downButton}>
            <MaterialIcons name="arrow-drop-down" size={60} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hint:{
    marginTop:70,
  },
  inputBox: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderColor: 'darkturquoise',
      borderWidth: 1,
      borderStyle: 'dashed',
      padding: 2,
      marginTop:10,
      width: Dimensions.get('window').width-50,
      height:60,
  },
  textInput: {
      flex:4,
      backgroundColor: 'azure',
      borderBottomColor: 'grey',
      borderWidth:1,
      height:50,
      paddingLeft:10,
  },
  button: {
    flex: 1,
    margin: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    height:50,
  },
  buttonText:{
    paddingTop:15,
  },
  vertical:{
    flex:4,
    alignItems: 'center',
    
  },
  horizontal:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    
  },
  circle: {
    backgroundColor: 'blue',
    width: 80,
    height: 80,
    alignItems: 'center',
    padding:10,
    borderRadius:40,
    margin: 20,
  },
  rightButton: {
    backgroundColor: 'blue',
    width: 60,
    height: 120,
    alignItems: 'center',
    paddingTop:30,
    borderTopRightRadius:120,
    borderBottomRightRadius:120,
    margin: 20,
  },
  leftButton: {
    backgroundColor: 'blue',
    width: 60,
    height: 120,
    alignItems: 'center',
    paddingTop:30,
    borderTopLeftRadius:120,
    borderBottomLeftRadius:120,
    margin: 20,
  },
  upButton:{
    backgroundColor: 'blue',
    width: 120,
    height: 60,
    alignItems: 'center',
    paddingBottom:10,
    borderTopLeftRadius:120,
    borderTopRightRadius:120,
    marginTop: 90,
  },
  downButton:{
    backgroundColor: 'blue',
    width: 120,
    height: 60,
    alignItems: 'center',
    paddingBottom:10,
    borderBottomLeftRadius:120,
    borderBottomRightRadius:120,
    marginBottom: 120,
    marginTop:4,
  },
});

export default App;
