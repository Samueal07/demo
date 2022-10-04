import  SanityClient  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


//  Connecting to Backend
const client=SanityClient({

    projectId:"vwfeipu2",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-10-21",
});
// take url of those images on backend
const builder=imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);

export default client