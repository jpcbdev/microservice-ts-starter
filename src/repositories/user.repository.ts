import { UserSchema } from '#root/schemas';
import { Document } from 'mongoose';
import { IUser } from '#root/interfaces';

export class UserRepository {
    static async getUsers(disabled?: boolean): Promise<Document[]> {
        try {

            let options = {};

            if (disabled !== undefined) options = { disabled };

            return await UserSchema.find(options);

        } catch (error) {
            throw new Error(error.message);
        }
    }
    static async updateUser(_id: string, data: IUser): Promise<Document> {
        try {
            return await UserSchema.findOneAndUpdate({ _id }, data, { new: true });
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static async createUser(data: IUser): Promise<void> {
        try {
            const newUser = new UserSchema(data);

            await newUser.save();

        } catch (error) {
            throw new Error(error.message);
        }
    }
}