import React from 'react';
import {View,Text,ScrollView,Image, StyleSheet} from 'react-native';
import Search from './Search';
import {LinearGradient} from 'expo-linear-gradient';
import {Feather,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
//import { FlatList } from 'react-native-gesture-handler';
const Home = ({navigation})=>{
    return(
        //TO-DO
        //get an API service for the name and images
        //use map or FlatList
        <ScrollView style={{backgroundColor:"#fff"}} showsVerticalScrollIndicator={false}>

            <View style={{flexDirection:"column", borderBottomColor:"#cccccc", borderBottomWidth:0.3, backgroundColor:"#fff"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{marginBottom:5}}>
                        <LinearGradient colors={['#0424D9','#F2E205', '#ffffff']} style={styles.status}>
                            <View style={styles.innerContainer}>
                                <Image source={require("../assets/image101.jpg")} style={styles.images}/>
                            </View>
                        </LinearGradient>
                        <Text style={{textAlign:"center"}}>_allme_</Text>
                    </View>

                    <View style={{marginBottom:5}}>
                        <LinearGradient colors={['#0424D9','#F2E205', '#ffffff']} style={styles.status}>
                            <View style={styles.innerContainer}>
                                <Image source={require("../assets/image202.jpg")} style={styles.images}/>
                            </View>
                        </LinearGradient>
                        <Text style={{textAlign:"center"}}>constatino</Text>
                    </View>
                    <View style={{marginBottom:5}}>
                        <LinearGradient colors={['#0424D9','#F2E205', '#ffffff']} style={styles.status}>
                            <View style={styles.innerContainer}>
                                <Image source={require("../assets/image303.jpg")} style={styles.images}/>
                            </View>
                        </LinearGradient>
                        <Text style={{textAlign:"center"}}>olyushka</Text>
                    </View>

                    <View style={{marginBottom:5}}>
                        <LinearGradient colors={['#0424D9','#F2E205', '#ffffff']} style={styles.status}>
                            <View style={styles.innerContainer}>
                                <Image source={require("../assets/image404.jpg")} style={styles.images}/>
                            </View>
                        </LinearGradient>
                        <Text style={{textAlign:"center"}}>polymoph</Text>
                    </View>

                    <View style={{marginBottom:5}}>
                        <LinearGradient colors={['#0424D9','#F2E205', '#ffffff']} style={styles.status}>
                            <View style={styles.innerContainer}>
                                <Image source={require("../assets/image505.jpg")} style={styles.images}/>
                            </View>
                        </LinearGradient>
                        <Text style={{textAlign:"center", marginBottom:5}}>efya</Text>
                    </View>

                </ScrollView>
            </View>
            <View style={{flex:1}}>
                <View>
                    <View style={styles.feedTop}>
                        <View style={styles.feedImageContainer}>
                            <Image source={require("../assets/image001.jpg")} style={styles.feedProfileContainer}/>
                        </View>
                        <View style={styles.feedProfileName}>
                            <Text>maame_nyakoa</Text>
                            <Text style={{fontWeight:"100"}}>Legon</Text>
                        </View>
                        <View style={styles.feedMenuBar}>
                            <MaterialCommunityIcons name="dots-vertical" color="#252525" size={25}/>
                        </View>
                    </View>
                    <View style={styles.feedImage}>
                        <Image source={require("../assets/image002.jpg")} style={styles.feedImage}/>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                        <View style={{flex:1}}>
                            <FontAwesome name="heart-o" color="#000000" size={35}/>
                        </View>
                        <View style={{flex:1}}>
                            <Feather name="message-circle" color="#000000" size={35}/>
                        </View>
                        <View style={{flex:4}}>
                            <Feather name="send" color="#000000" size={35}/>
                        </View>
                        <View style={{flex:1}}>
                            <Feather name="bookmark" color="#000000" size={35}/>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", margin:7}}>
                        <Text style={{fontWeight:"800"}}>maame_nyakoa<Text style={{fontWeight:"200"}}>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</Text></Text>
                    </View>
                </View>
            </View>



            <View style={{flex:1}}>
                <View>
                    <View style={styles.feedTop}>
                        <View style={styles.feedImageContainer}>
                            <Image source={require("../assets/image003.jpg")} style={styles.feedProfileContainer}/>
                        </View>
                        <View style={styles.feedProfileName}>
                            <Text style={{fontWeight:"900"}}>immaculate</Text>
                            <Text style={{fontWeight:"100"}}>Tema,Accra</Text>
                        </View>
                        <View style={styles.feedMenuBar}>
                            <MaterialCommunityIcons name="dots-vertical" color="#252525" size={25}/>
                        </View>
                    </View>
                    <View style={styles.feedImage}>
                        <Image source={require("../assets/image004.jpg")} style={styles.feedImage}/>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                        <View style={{flex:1}}>
                            <FontAwesome name="heart-o" color="#000000" size={35}/>
                        </View>
                        <View style={{flex:1}}>
                            <Feather name="message-circle" color="#000000" size={35}/>
                        </View>
                        <View style={{flex:4}}>
                            <Feather name="send" color="#000000" size={35}/>
                        </View>
                        <View style={{flex:1}}>
                            <Feather name="bookmark" color="#000000" size={35}/>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", margin:7}}>
                        <Text style={{fontWeight:"800"}}>immaculate<Text style={{fontWeight:"200"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text></Text>
                    </View>
                </View>
            </View>


        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    status:{
        width:70,
        height:70, 
        borderRadius:35, 
        margin:9,
        alignItems:"center",
        justifyContent:"center"
    },
    innerContainer:{
        width:65,
        height:65,
        borderRadius:35,
        backgroundColor:"#fff",
        justifyContent:"center",
    },
    images:{
        width:60,
        height:60,
        borderRadius:30,
        alignSelf:"center"
    },

    feedProfileContainer:{
        width:50,
        height:50,
        borderRadius:25
    }
    ,

    feedImage:{
        width:400,
        height:400
    }
    ,
    feedTop:{
        flexDirection:"row",
        margin:10
    },
    feedImageContainer:{
        flex:1.3,
        width:50,
        height:50,
        borderRadius:25
    },
    feedProfileName:{
        flex:5
    },

    feedMenuBar:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        marginLeft:15
    }
})

export default Home;