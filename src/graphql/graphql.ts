
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UpdateUserArgs {
    email?: Nullable<string>;
    password?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    profilePicture?: Nullable<string>;
}

export class User {
    id: string;
    email: string;
    hash: string;
    firstName: string;
    lastName: string;
    profilePicture?: Nullable<string>;
    role: string;
    examsTakenId?: Nullable<string[]>;
    examsSetId?: Nullable<string[]>;
}

export abstract class IMutation {
    abstract updateUser(id: string, args: UpdateUserArgs): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IQuery {
    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
