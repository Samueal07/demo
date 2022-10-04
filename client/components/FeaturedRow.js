import { View, Text, ScrollView,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

import DefaultImage from '../components/Naan/Vada_Pav.jpeg';
import sanityClient from '../sanity';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const FeaturedRow = ({title,description,id}) => {
  const [restaurants,setRestaurants]=useState([]);

  useEffect(()=>{
    // using dynamic query to get data
    // learn grocs basics
    // using params to pass in id
    sanityClient.fetch(`
    
    *[_type=="featured" && _id==$id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
          
        }
      },
    }[0]
    
    
    `,{id}).then(

      data=>{
        setRestaurants(data?.restaurants);
      }


    )
  },[])
  
  
  return (
    <View>


      <View className="mt-4 flex-row items-center justify-between px-4">

        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#E97451" />
      </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
        
        horizontal
        contentContainerStyle={{
            /* padding in between inner scroll view of the card */
            paddingHorizontal:15,
        }}

        showsHorizontalScrollIndicator={false}
        /* padding in between cards */
        className="pt-4" 
        >

        {/*Restaurant Card */}
        {/* map thorugh the restuarants and ofr each one make a restaurnatcard 
          component */}

        {

          restaurants?.map((restaurant)=>(

            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              address={restaurant.address}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}       
        ></RestaurantCard>



          ))

        }
        
        {/*<RestaurantCard
        
        id={123}
        imgUrl={DEFAULT_IMAGE}
        title="Vada Pav"
        rating={4.5}
        genre="Indian"
        address="Kondwa"
        short_description="its the most tastiest sushi out here"
        dishes={{}}
        long={20}
        lat={12}
        
        ></RestaurantCard>*/}


        </ScrollView>
    </View>
  )
}

export default FeaturedRow