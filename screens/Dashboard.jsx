import { View, Text, StyleSheet, SafeAreaView, ScrollView ,Image, processColor, TouchableOpacity,Button} from 'react-native';
import React, { useContext, useState ,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Help from './Help';
import { GlobalInfo } from '../App';


const Dashboard = () => {
  const navigation = useNavigation()
  const { welname } = useContext(GlobalInfo);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('GetStarted'); 
    } catch (error) {
      console.error("Error clearing data", error);
      Alert.alert("Logout Error", "An error occurred while logging out.");
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        <Text style={styles.header}>Welcome {welname}{'\n'}Choose The Products {'\n'}You Like</Text>
        <View style={styles.container}>
          <View style={styles.leftarea}>
            <View style={styles.card1}>
              <Text style={{fontSize:40,fontWeight:'bold',color:'#DAE0E2',textAlign:'left',marginLeft:25}}>-20%</Text>
              <Text style={{fontSize:17,textAlign:'left',marginLeft:25,color:'#DAE0E2'}}>for the first order</Text>
            </View>
            <View style={styles.card2}>
              <Image style={styles.image}source={{uri:'https://s.yimg.com/os/creatr-uploaded-images/2020-11/7c9dc7a0-24f3-11eb-aed4-9f1ba3e2dec3'} }/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>PS5 Console</Text>
              <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>Sony Playstation 5</Text>
              <View style={styles.pricecontainer}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'left'}}>$49.99</Text>
              </View>
            </View>
            <View style={styles.card3}>
              <Image style={styles.image}source={{uri:'https://m.media-amazon.com/images/I/3147f-xzcIL._SX300_SY300_QL70_FMwebp_.jpg'} }/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>Sony Headphones</Text>
              <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>Sony Playstation 5</Text>
              <View style={styles.pricecontainer}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'left'}}>$14.99</Text>
              </View>
            </View>
            <View style={styles.card4}>
              <Image style={styles.image}source={{uri:'https://images-eu.ssl-images-amazon.com/images/I/418WzN0pPfL._AC_UL165_SR165,165_.jpg'} }/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>PS5 Controllers</Text>
              <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>Sony Playstation 5</Text>
              <View style={styles.pricecontainer}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'left'}}>$9.99</Text>
              </View>
            </View>
            <View style={styles.card5}>
              <Image style={styles.image}source={{uri:'https://th.bing.com/th/id/OIP.POR1_WwgnwAYIvPGJQ5VOQHaEK?w=332&h=186&c=7&r=0&o=5&pid=1.7'} }/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>Xbox Creeyas</Text>
              <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>Microsoft Xbox</Text>
              <View style={styles.pricecontainer}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'left'}}>$49.99</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightarea}>
            <View style={styles.card6}>
              <Image style={styles.image}source={{uri:'https://th.bing.com/th/id/OIP.YXJ-h7nZF0qE485OQZvk5wHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7'} }/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>Xbox Series X</Text>
              <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>Microsoft Xbox</Text>
              <View style={styles.pricecontainer}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'left'}}>$44.99</Text>
              </View>
            </View>
            <View style={styles.card7}>
              <Image style={styles.image}source={{uri:'https://th.bing.com/th/id/OIP.UiYi2m0Une2Rw8jng6uA-AHaHa?w=193&h=192&c=7&r=0&o=5&pid=1.7'} }/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>PS4 Console</Text>
              <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>Sony Playstation 4</Text>
              <View style={styles.pricecontainer}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'left'}}>$39.99</Text>
              </View>
            </View>
            <View style={styles.card8}>
              <Image style={styles.image}source={{uri:'https://th.bing.com/th/id/OIP.YiUrnLVoZdT4Yi8AWamLMwHaD4?w=347&h=180&c=7&r=0&o=5&pid=1.7'} }/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>Nintendo Switch</Text>
              <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>Nintendo Consoles</Text>
              <View style={styles.pricecontainer}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'left'}}>$29.99</Text>
              </View>
            </View>
            <View style={styles.card9}>
              <Image style={styles.image}source={{uri:'https://th.bing.com/th/id/OIP.1sf1F8erLjQZ4U6WZ35NGgHaE8?w=285&h=190&c=7&r=0&o=5&pid=1.7'} }/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>PS3 Console</Text>
              <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>Sony Playstation 3</Text>
              <View style={styles.pricecontainer}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'left'}}>$19.99</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.card10} onPress={()=> navigation.navigate('Help')}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color:'white', textAlign: 'center' }}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoutContainer}>
        <Button title="Logout" onPress={handleLogout} color="#ff4d4d" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#218F76',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 40,
  },
  header: {
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 20,
    marginRight:150
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 0,
  },
  leftarea: {
    width: '50%',
    height: 1050,
    //backgroundColor: '#FFCDD2',
    //borderRadius: 10,
    gap:5,
    alignItems:'center'
  },
  rightarea: {
    width: '50%',
    height: 1500,
    //backgroundColor: '#BBDEFB',
    //borderRadius: 10,
    gap:6,
    alignItems:'center'
  },
  card1:{
    backgroundColor:'#4834DF',
    width:'97%',
    height:120,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'flex-start',
    elevation:500
  },
  card2:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:275,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  card3:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:275,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  card4:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:275,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  card5:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:275,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  card6:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:275,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  card7:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:275,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  card8:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:275,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  card9:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:275,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  card10:{
    backgroundColor:'#2C3335',
    width:'97%',
    height:115,
    borderRadius:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:500
  },
  image:{
    height:150,
    width:190,
    borderRadius:20
    
  },
  pricecontainer:{
    backgroundColor:'#99AAAB',
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    top:5,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  }
});
