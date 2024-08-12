import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function home() {
    const {user} = useUser()
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 6,
        backgroundColor:'red',
        marginHorizontal:4,
        borderRadius:5,

      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
          }}>
            Welcome
          </Text>
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 20,
          }}>
            {user?.fullName}
          </Text>
        </View>
        <View>
          <Image 
            source={{ uri: user?.imageUrl }} 
            style={{
              width: 50,
              height: 50,
              borderRadius: 99
            }} 
          />
        </View>
      </View>
  )
}