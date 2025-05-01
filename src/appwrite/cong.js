//cong.js
import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf.js";

export class Service {
  client = new Client();
  database;
//   bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl);
    this.client.setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
    // this.bucket = new Storage(this.client);
  }
async manageUser(
    name,
    email,
    pass,   
)   {

 try {
    return await this.database.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteManageUserCollectionId,
      ID.unique(), 
      {
        name,
        email,
        pass,
      }
    );
    }
    catch(error)
    {
        console.log("Appwrite :: manageuser::",error);
        return false;   
        
    }
}
async fakeLogin(email, pass) {
  try {
    const result = await this.database.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteManageUserCollectionId,
      [
        Query.equal("email", email),
        Query.equal("pass", pass)
      ]
    );

    if (result.documents.length === 0) {
      throw new Error("Invalid email or password");
    }

    return result.documents[0]; // return the matched user
  } catch (error) {
    console.log("Appwrite service :: fakeLogin ::", error);
    return false;
  }
}
async UploadMarksData(
  StudentName,
  RollNumber,
  Class,
  java,
  python,
  c,
  fds,
  ai,
  php,
) {
  try {
    return await this.database.createDocument(
      conf.appwriteDatabaseId,
      conf.appwritemarksCollectionId,
      ID.unique(),
      {
        StudentName,
        RollNumber: RollNumber.toString(),
        Class: Class.toString(),
        java: java.toString(),
        python: python.toString(),
        c: c.toString(),
        fds: fds.toString(),
        ai: ai.toString(),
        php: php.toString(),    
      }
    );
  } catch (error) {
    console.log("Appwrite service :: uploadMarksData :: error", error);
    return false;
  }
}

async UploadExamTimeTable(
  subject,
  date,
  startTime,
  endTime,
) {
  try {
    return await this.database.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteTimeTableId,
      ID.unique(),
      {
        subject,
        date,
        startTime,
        endTime,  
      }
    );
  } catch (error) {
    console.log("Appwrite service :: uploadMarksData :: error", error);
    return false;
  }
}

// Fething all the Marks

async getAllMarks() {
  try {
    const allDocs = [];
    let offset = 0;
    const limit = 100;
    let fetched;

    do {
      const res = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwritemarksCollectionId,
        [Query.limit(limit), Query.offset(offset)]
      );

      fetched = res.documents;
      allDocs.push(...fetched);
      offset += limit;
    } while (fetched.length === limit);

    return allDocs;
  } catch (error) {
    console.log("Appwrite service :: getAllMarksData :: error " + error);
    return false;
  }
}

// Fetching Exam Time Table

async getAllExam() {
  try {
    const allDocs = [];
    let offset = 0;
    const limit = 100;
    let fetched;

    do {
      const res = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteTimeTableId, // ✅ Correct collection ID
        [Query.limit(limit), Query.offset(offset)]
      );

      fetched = res.documents;
      allDocs.push(...fetched);
      offset += limit;
    } while (fetched.length === limit);

    return allDocs;
  } catch (error) {
    console.log("Appwrite service :: getAllExamData :: error " + error);
    return false;
  }
}
 

}
const service = new Service();
export default service;


