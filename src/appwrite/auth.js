//auth.js
/*import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // Check if the user is already logged in
    async checkIfLoggedIn() {
        try {
            const user = await this.account.get(); // Get the current user
            return user ? true : false; // If there's a user, return true
        } catch (error) {
            return false; // If there's an error (no session), return false
        }
    }

    async createAccount({email, password, name, phone}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name, phone);
            if (userAccount) {
                return this.login({email, password});
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            // First, check if already logged in
            const loggedIn = await this.checkIfLoggedIn();
            if (loggedIn) {
                console.log("User already logged in.");
                return;
            }
            
            // If not logged in, create a new session
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;*/
// auth.js
//
/*import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // Check if the user is already logged in
    async checkIfLoggedIn() {
        try {
            const user = await this.account.get(); // Get the current user
            return user ? true : false; // If there's a user, return true
        } catch (error) {
            return false; // If there's an error (no session), return false
        }
    }

    async createAccount({email, password, name, phone}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name, phone);
            if (userAccount) {
                return this.login({email, password});
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            // First, check if already logged in
            const loggedIn = await this.checkIfLoggedIn();
            if (loggedIn) {
                console.log("User already logged in.");
                return;
            }
            
            // If not logged in, create a new session
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;*/
// AuthService.js
// AuthService.js
// src/appwrite/auth.js
/// src/appwrite/auth.js
// src/appwrite/auth.js



/*import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async checkIfLoggedIn() {
        try {
            const user = await this.account.get(); // Get the current user
            return user ? true : false; // If there's a user, return true
        } catch (error) {
            return false; // If there's an error (no session), return false
        }
    }

    async createAccount({ email, password, name, phone, role }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name, phone);
            if (userAccount) {
                await this.account.updatePrefs(userAccount.$id, { role });
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const loggedIn = await this.checkIfLoggedIn();
            if (loggedIn) {
                console.log("User already logged in.");
                return;
            }
            
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;*/

// AuthService.js
// auth.js



/*
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('67f7b1800023881120f5'); // Your Appwrite project ID

const account = new Account(client);

class AuthService {
  async createAccount({ email, password, name, phone }) {
    try {
      const userId = ID.unique();
      const user = await account.create(userId, email, password, name, phone);
      await account.updatePrefs(user.$id, { role: 'admin' });
      return this.login({ email, password });
    } catch (error) {
      throw new Error(`Failed to create account: ${error.message}`);
    }
  }

  async login({ email, password }) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }

  async logout() {
    try {
      await account.deleteSessions();
      return true;
    } catch (error) {
      console.error('Logout failed:', error.message);
      return false;
    }
  }

  async getCurrentUser() {
    try {
     const user = await account.get();
     return user;
   } catch (error) {
     console.error('AuthService::getCurrentUser:', error);
     return null;
   }
}

}

export default new AuthService();*/


// appwrite/auth.js
import conf from "../conf/conf";
import { Client, Account,ID} from "appwrite";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('67f7b1800023881120f5'); 

const account = new Account(client);

class AuthService {

//   async createAccount({ email, password, name, phone, role = 'user' }) {
//     try {
//       const userId = ID.unique();
//       const user = await account.create(userId, email, password, name, phone);
//       await account.updatePrefs(user.$id, { role: role });
//       return this.login({ email, password });
//     } catch (error) {
//       throw new Error(`Failed to create account: ${error.message}`);
//     }
//   }

async createAccount({ email, password, name, phone }) {
    try {
      const userAccount = await account.create(ID.unique(), email, password, name, phone);
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("signin ::", error);
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }

  async logout() {
    try {
      await account.deleteSessions();
      return true;
    } catch (error) {
      console.error('Logout failed:', error.message);
      return false;
    }
  }

  async getCurrentUser() {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      console.error('AuthService::getCurrentUser:', error);
      return null;
    }
  }
}

export default new AuthService();