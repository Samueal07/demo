// rnfe shorcut
import {  Text, Image, TextInput, ScrollView, TextBase, SafeAreaView,StyleSheet,StatusBar, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    UserIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    ChevronDownIcon
    
} from "react-native-heroicons/outline";

import Logo from '../components/Naan/Logo.png';
const Logo_Image=Image.resolveAssetSource(Logo).uri;


import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from "../sanity"



const HomeScreen = () => {
  // pullying data from backend
  const [featuredCategories,setfeaturedCategories]=useState([])
 
    const navigation=useNavigation();

    // as screen is mounded do something
    // when UI loads
    useLayoutEffect(()=>{

      navigation.setOptions({
          headerShown:false,
      });


  },[])

  // this is when Component is mounted

  useEffect(()=>{

    sanityClient.fetch(`
    
          *[_type=="featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type->{
                name
                
              }
            },
          }
          
          
    
    `).then((data)=>{

      setfeaturedCategories(data);

    })

  },[])

  // console.log(featuredCategories)

  


  return (
    <SafeAreaView style={styles.AndroidSafeArea}  className="bg-white pt-5" >
     
     
     <View className="flex-row pb-3 items-center mx-4 space-x-2" >

      <Image
      
      source={

       {uri:Logo_Image} 
      }

      className="h-12 w-12 bg-gray-300 p-4 rounded-full"
      
      
      />

      <View className=" flex-1"  >
        <Text className="font-bold text-gray-400 text-xs" > EatMax </Text>
        <Text className="font-bold text-xl"> Location 
        
        <ChevronDownIcon size={20} color="#E97451"/>

        
        </Text>
      </View>
      
      <UserIcon size={35}  color="#E97451"/>
     </View>
     
     {/*Search part */}

     <View className="flex-row items-center space-x-2 pb-2 mx-3 mb-2">

        <View className="flex-row space-x-2 flex-1 bg-gray-200 items-center pb-1 pt-1 pl-1 ">

        <MagnifyingGlassIcon color="black" size={20}/>        
        <TextInput placeholder='Cuisines and Restaurants' keyboardType='default'/>
        
        </View>

        <AdjustmentsVerticalIcon color="#E97451"/>

     </View>


      {/* scrolling container */}

      <ScrollView className="bg-gray-100">

      <Categories />

      {/*Featured section */}

      {/*!see its optional chaining and see flat list*/}
      {featuredCategories?.map((category)=>(

          <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        
          />


      ))}

      


      </ScrollView>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  
  
});
export default HomeScreen
