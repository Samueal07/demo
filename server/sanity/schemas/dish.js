export default{

name:"dish",
Title:"Dish",
type:"document",
fields:[

    {

        name:"name",
        type:"string",
        title:"Name of Dish",
        validation:(Rule)=>Rule.required(),


    },

    {

        name:"short_description",
        type:"string",
        title:"Short description",
        validation:(Rule)=>Rule.max(200),


    },

    {


        name:"price",
        type:"number",
        title:"price of the dish is Rupees",
    },

    {

        name:"image",
        type:"image",
        title:"Image of the dish",

    },

]

}