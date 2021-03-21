export interface IUser{
    id: string;
    firstName: string;
    lastName: string;
}

const create = (args: Partial<IUser>): IUser => ({
    id: args.id ?? '',
    firstName: args.firstName ?? '',
    lastName: args.lastName ?? '',
});

const User = { create };

export default User;
