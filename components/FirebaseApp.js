import React, { Component } from 'react'
import { View, Text } from 'react-native'

import firestore from '@react-native-firebase/firestore'

export default class FirebaseApp extends Component {

    constructor(props){
        super(props)
        this.getUser()
        this.state = {name:''}
    }

    getUser = async () => {
        const userDocument = await firestore().collection('users')
        .doc('IP3Hz2lxBhMA1C9lkJbM').get()
        this.setState({name: userDocument._data.name,
                    curso: userDocument._data.curso,
                    idade: userDocument._data.idade})
    }

  render() {
    return (
      <View>
        <Text>
          {this.state.name} {"\n"}
          {this.state.curso}{"\n"}
          {this.state.idade}
        </Text>
      </View>
    )
  }
}