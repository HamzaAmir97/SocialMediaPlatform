import { Client,Account,Databases,Storage,Avatars } from "appwrite";
 export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    // databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    // userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    // storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
 }
export const client= new Client();
export const account= new Account(client);
export const databases= new Databases(client);
export const storage= new Storage(client);
export const avatars= new Avatars(client);

