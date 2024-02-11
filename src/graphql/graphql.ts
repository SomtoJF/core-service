
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
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
    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
