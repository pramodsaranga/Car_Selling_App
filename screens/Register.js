import {  View,Alert,StyleSheet} from 'react-native'
import React ,{ useState } from 'react'
import { NativeBaseProvider,HStack, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button, ScrollView} from "native-base";
import Buttone from '../components/Buttone';
import Colors from '../assets/color';


export default function Register({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <NativeBaseProvider>
      <ScrollView>
      
  
      <VStack space={3} w="75%" maxW="300px" mx="auto">
      <Text fontSize="3xl" bold underline mt="10%" ml="34%" color={Colors.green}>Sign Up</Text>

      <Center>
      <Image 
        source={require("../assets/icons/log.png")}
      />
      </Center>

      <VStack space={4}  mt="5%"   maxW="300px" mx="auto">
                <Input mx="3" value={fullName} color="black" onChangeText={(e) => { setFullName(e) }} placeholder="Full Name" w="90%" />
                <Input mx="3" value={email} color="black" onChangeText={(e) => { setEmail(e) }} placeholder="Email" w="90%" />
                <Input mx="3" value={contactNum} color="black" onChangeText={(e) => { setContactNum(e) }} placeholder="Contact Num" w="90%" />
                <Input mx="3" value={username} color="black" onChangeText={(e) => { setUsername(e) }} placeholder="Username" w="90%" />
                <Input mx="3" value={password} color="black" onChangeText={(e) => { setPassword(e) }} placeholder="Password" w="90%" />
                <Button size="md"  colorScheme="blue" rounded="full" onPress={() => {navigation.navigate("Login") }}>Sign Up</Button>

                <HStack space={2} alignSelf={'center'} mt="5%">
          <Text style={styles.login_label}>Already have an account?</Text>
          <Button size="md"
            variant="link"
            colorScheme={'secondary'}
            style={styles.btn_login}
            onPress={() => {
              try {
                navigation.navigate("Login")
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Text style={styles.btn_login_label}>Login</Text>
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  login_label: {
    
    marginTop:'2.75%',
    color: 'green',
    fontSize: 17,
    fontWeight: 'bold',
    
  },
  
  btn_login_label: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 17
  }
  
})



