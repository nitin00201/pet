import { View, Text, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import Colors from "../../constants/Colors";
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = useCallback(async () => {
    try {    
        const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View>
      <Image
        source={require("../../assets/images/login.png")}
        style={{
          width: "100%",
          height: 500,
        }}
      />

      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            textAlign: "center",
            fontSize: 30,
          }}
        >
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            padding: 5,
            fontFamily: "outfit-regular",
            fontSize: 18,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Lorem ipsum orci sit amet orci scelerisque, a interdum dui elementum.
        </Text>
        <View>
        <Pressable
          style={{
            padding: 10,
            marginTop: 50,
            fontFamily:'outfit-bold',
            backgroundColor:'orange',
            borderRadius: 5,
            width: "100%",
          }}
          onPress={onPress}
          
        >
          <Text>Getting Started</Text>
        </Pressable>
        </View>

        
      </View>
    </View>
  );
}
