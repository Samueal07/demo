import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon ,
    ChevronRightIcon,
    MapPinIcon,
    QuestionMarkCircleIcon,
    StarIcon

} from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

const RestaurantScreen = () => {
    const navigation=useNavigation();

    //doing destrucing of the params 
    const {params:{
        
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
        }}=useRoute();

// as soon as the info gets painted navigation header chuppa do   
    useLayoutEffect(()=>{

        navigation.setOptions({

            headerShown: false,
        })
    },[])
  return (
    <>
    <BasketIcon/>
    <ScrollView>
        <View className='relative'>

            <Image
            
            source={{
                uri:urlFor(imgUrl).url(),
            }}
            className='w-full h-56 bg-gray-300 p-4'
            />

            <TouchableOpacity 
             onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
                <ArrowLeftIcon size={20} color="#E97451"/>
            </TouchableOpacity>

        </View>

        <View className="bg-white">
            <View className="px-4 pt-4">
            <Text className="text-3xl font-bold"> {title} </Text>

            <View className="flex-row space-x-2 my-1">

                
                <View className="flex-row items-center space-x-1">
                <StarIcon color='gold' opacity={0.5} size={22}/>
                <Text className="text-xs text-gray-500">
                    <Text className="text-amber-500 ">
                        {rating}
                    </Text> {genre}
                </Text>
                </View>


                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.4} size={22}/>
                    <Text className="text-xs text-gray-500"> Nearby. {address}</Text>
                </View>

                <Text className="text-gray-500 mt-2 pb-4"></Text>
            </View>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                <QuestionMarkCircleIcon  color="gray" opacity={0.6} size={20}/>

                <Text className="pt-2 flex-1 text-md font-bold">
                    Give Special Instructions to our Chef!!
                </Text>
                <ChevronRightIcon color="#E97451"/>
            </TouchableOpacity>

            <View className="pb-36">

                <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
                    
                    {/*Dishrowa */}

                    {dishes.map(dish=>(
                            <DishRow
                            
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                            
                            />

                    ))}
                
            </View>
            </View>

        </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen