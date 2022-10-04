import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from "react-currency-formatter"
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice'
import {useDispatch,useSelector} from "react-redux"
const DishRow = ({id,name,description,price,image}) => {
    const [isPressed,setIsPressed]=useState(false);

    // making changes to store js when we click that plus icon
    const dispatch=useDispatch();
    const items=useSelector((state)=>selectBasketItemsWithId(state,id));
    const addItemToBasket=()=>{

      // info adding to basket
      dispatch(addToBasket({id,name,description,price,image}))
    }


    const removeItemFromBasket=()=>{
// edge case
      if(!items.length>0) return;

      dispatch(removeFromBasket({id}));
    }
   
    console.log(items)
    
  return (
    <>
    {/* we dont want it to be touchable when we press it 
    so we use backticks for class name*/}
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} 
    
    
    className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
    <View className="flex-row">
      <View className="flex-1 pr-2">

        
        <Text className="text-lg mb-1"> {name}</Text>

        <Text className="text-gray-400">{description}</Text>

        <Text className=" mt-2" color="#CD7F32">
            <Currency quantity={price} currency="INR"  />
        </Text>
        
      </View>

      <View>
        <Image
        style={{
            borderWidth:1,
            borderColor:"#F3F3F4"
        }}
        source={{uri:urlFor(image).url()}}
        className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
      </View>
    </TouchableOpacity>
        {/* if pressed true or flase toggled by setis pressed */}
    {isPressed &&(

        <View className="bg-white px-4 ">
            <View className="flex-row items-center space-x-2 pb-3 ">

                <TouchableOpacity 
                disabled={!items.length}
                onPress={removeItemFromBasket}>
                    <MinusCircleIcon color={items.length>0? "#CD7F32":"gray"} size={40}/>
                </TouchableOpacity>

                <Text>{items.length}</Text>

                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon color="#CD7F32" size={40}/>
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow