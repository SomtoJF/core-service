
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
    __typename?: 'User';
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
    __typename?: 'IMutation';
    updateUser?: Nullable<User>;
    deleteUser?: Nullable<User>;
}

export abstract class IQuery {
    __typename?: 'IQuery';
    user?: Nullable<User>;
}

type Nullable<T> = T | null;
