import { Client, Databases, ID, Query } from 'appwrite';
import conf from '../conf/conf.js'

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            );
        } catch (error) {
            console.log("Appwrite service::createPost::error", error);

        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionId,
                slug,
                { title, content, featuredImage, status }
            )
        } catch (error) {
            console.log("Appwrite service::updatePost::error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service::deletePost::error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service::getPostById::error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appWriteDatabaseID, conf.appWriteCollectionId, queries)
        } catch (error) {
            console.log("Appwrite service::getAllPost::error", error);
            return false;
        }
    }

    //upload file service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile::error", error);
            return false;
        }
    }
    //delete file service
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile::error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appWriteBucketId, fileId)
    }
}

const service = new Service();
export default service;