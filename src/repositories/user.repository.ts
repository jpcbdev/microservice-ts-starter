import { UserSchema } from '../schemas';
import { Document } from 'mongoose';
import { IUser } from '../interfaces';

export class UserRepository {

    static async getUsers(): Promise<Document[]> {
        try {
            return await UserSchema.find();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateUser(_id: string, data: IUser): Promise<void> {
        try {
            const user = await UserSchema.findOneAndUpdate({ _id }, data, { new: true });
            if (!user) throw new Error('Usuario no encontrado');
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

    static async deleteUser(_id: string): Promise<void> {
        try {
            const user = await UserSchema.findOneAndDelete({ _id });
            if (!user) throw new Error('Usuario no encontrado');
        } catch (error) {
            throw new Error(error.message);
        }
    }
}