
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { json } from 'stream/consumers';



// let names = [];
const AsyncStorageDemo = () => {


  const [user, setuser] = useState('');
  let data1 = { name: "dimpal", age: "27" };
  // let data2 = { name: "dimpal2", gender: "female" };


  // const [data, setData] = useState('');


  const setsaveData = async () => {
    // names.push(data)
    let name = ["name", "dimpal"];
    let surname = ["surname", "donga"];


    try {
      // await AsyncStorage.setItem("user","dimpal")
      // await AsyncStorage.setItem("user", JSON.stringify(data1))
      await AsyncStorage.setItem("user", JSON.stringify(data1))
      // mergedata
      // await AsyncStorage.mergeItem("user", JSON.stringify(data2))
      //multiset
      // await AsyncStorage.multiSet([name, surname])
    } catch (e) {
      console.log(e);
    }
  }


  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem("user")
      //multiget
      // const name = await AsyncStorage.multiGet(["name", "surname"])
      console.warn(name);
      // setuser(name)
    } catch (e) {
      console.log(e);
    }
  }


  const RemoveData = async () => {
    try {
      await AsyncStorage.removeItem("user")
      // setuser('')
    } catch (e) {
      console.log(e);
    }
  }


  const clearData = async () => {
    try {
      //all data clear
      await AsyncStorage.clear()
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{user}</Text>


      {/* <TextInput
        placeholder='Enter Data'
        value={data}
        onChangeText={text => setData(text)}
        style={{ borderWidth: 1 }}
      /> */}



      <TouchableOpacity onPress={setsaveData} style={{ backgroundColor: "green", padding: 10, marginBottom: 10, }}>
        <Text style={{color:"#fff"}}>Set Data</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={getData} style={{ backgroundColor: "green", padding: 10, marginBottom: 10 }}>
        <Text style={{color:"#fff"}}>Get Data</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={RemoveData} style={{ backgroundColor: "green", padding: 10, marginBottom: 10 }}>
        <Text style={{color:"#fff"}}>Remove Data</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={clearData} style={{ backgroundColor: "green", padding: 10, marginBottom: 10 }}>
        <Text style={{color:"#fff"}}>Clear Data</Text>
      </TouchableOpacity>
    </View>
  )
}


export default AsyncStorageDemo