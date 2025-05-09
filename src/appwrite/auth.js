import conf from '../conf/conf.js';
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

    async createAccount({email, password, name, phone}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name, phone);
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
          const user = await this.account.get();
          const prefs = await this.account.getPrefs();
          return {
            ...user,
            prefs,
          };
        } catch (error) {
          console.error("getCurrentUser error:", error);
          return null;
        }
      }

    async logout() {

        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService