import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box, Input, FormControl,HStack, Stack, Button,VStack,Center, ScrollView } from 'native-base'
import Colors from '../assets/color';


export default function Login({ navigation }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        
        <NativeBaseProvider>
            <ScrollView>
            <VStack space={10} w="75%"  mx="auto">
            <Text style={styles.text}>Login</Text>

            <Center>
            <Image  
             source={require("../assets/icons/log.png")}
         />       </Center>

                <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Username</FormControl.Label>
                        <Input type="text" style={styles.input} value={username} onChangeText={(e) => { setUsername(e) }} />
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" style={styles.input} value={password} onChangeText={(e) => { setPassword(e) }} />
                        <Button rounded="full" size="md"   style={styles.login_btn} onPress={() => { navigation.navigate("AddCar") }} >
                            <Text style={styles.login_btn_label}>Login</Text>
                        </Button>
                    </Stack>
                </FormControl>
                <HStack  mt="10%" alignSelf={'center'} >
                    <Text style={styles.signup_label}>Don't have an account?</Text>
                    <Button size="md" variant="link" colorScheme={'secondary'} style={styles.btn_Signup} onPress={() => { navigation.navigate("Register") }}>
                        <Text style={styles.btn_Signup_label}>Sign Up</Text>
                    </Button>
                </HStack>
            </VStack>
            </ScrollView>
        </NativeBaseProvider>
       
    )
}

const styles = StyleSheet.create({

    text:{
        color: "green",
        fontSize:30,
        fontWeight: "bold",
        alignContent:"center",
        marginLeft:"38%",
        marginTop:"10%"
    },

    img: {
        width: '100%',
        height: '100%'
    },
    logo: {
        width: '60%',
        height: '20%',
        marginTop: '30%',
        alignSelf: 'center'
    },
    input: {
        color: 'black',
        fontSize: 20
    },
    login_btn: {
        marginTop: '20%',
        color:'green'
    },
    login_btn_label: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        

    },
    signup_label: {
        marginTop: '4%',
        color: 'black',
        fontSize: 17
        
    },
    btn_Signup: {
       
    },
    btn_Signup_label: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 17
    }
})