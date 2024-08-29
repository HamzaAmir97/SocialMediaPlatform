import { INewUser } from "@/types";
import  {ID} from 'appwrite'
  import { account, appwriteConfig, avatars, databases } from "./config";
import { error } from "console";

export async function  createUserAccount(user:INewUser){
    
      try {

 const newAccount= await account.create(
   ID.unique(),
   user.email,
   user.password,
   user.name
 )

   if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(user.name);


    const newUser = await saveUserToDB ({
      accountId:newAccount.$id,
      name:newAccount.name,
      email:newAccount.email,
      username:user.username,
      imageUrl :avatarUrl,
    })

  return newUser;

 
      
      }
       catch (error){
         console.log(error)
         throw error; // إعادة رمي الخطأ ليتم التعامل معه في المكون


       }
            
}
  

export async function saveUserToDB  (user:{
  
  accountId:string,
  name:string,
  username?:string,
  email:string,
  imageUrl: string;
})
  
  
  {

 try {

  const newUser = await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    ID.unique(),
    user,
  )
 
    return newUser;
  }
  catch (error){
console.log(error)
  throw error;

  }
  }
