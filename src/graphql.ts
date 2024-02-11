
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
    __typename?: 'User';
    id: string;
    email: string;
    hash: string;
    firstName: string;
    lastName: string;
    profilePicture?: Nullable<string>;
    role: string;
    examsTaken?: Nullable<string[]>;
    examsSet?: Nullable<string[]>;
}

export abstract class IQuery {
    __typename?: 'IQuery';
    user?: Nullable<User>;
}

type Nullable<T> = T | null;
