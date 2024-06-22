import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);// Your project ID
        this.account = new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
           const UserAccount=   await this.account.create(ID.unique(), email,password,name); 
           
           if (UserAccount) {
            //login to account
            return this.login({email,password});
           } else {
             return UserAccount;
           }

        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
        return null ;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
   
}

const authService = new AuthService();

export default authService;