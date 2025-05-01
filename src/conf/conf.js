//conf.js
const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritemarksCollectionId: String(import.meta.env.VITE_APPWRITE_MARKS_COLLECTION_ID),
    //appwriteadminProfileCollectionId: String(import.meta.env.VITE_APPWRITE_admin_profile_collection_ID),
    appwriteManageUserCollectionId: String(import.meta.env.VITE_APPWRITE_MANAGE_USER_COLLECTION_ID),
    appwriteTimeTableId: String(import.meta.env.VITE_APPWRITE_TIME_TABLE_ID),
    
}
export default conf
