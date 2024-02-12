
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class ObjInput {
    question: string;
    options: string[];
    answer: number;
}

export class TheoryInput {
    question: string;
    answers: string[];
}

export class CreateExamArgs {
    name: string;
    examinerId: string;
    objectiveQuestions?: Nullable<ObjInput[]>;
    theoryQuestions?: Nullable<TheoryInput[]>;
    due: DateTimeISO;
}

export class UpdateUserArgs {
    email?: Nullable<string>;
    password?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    profilePicture?: Nullable<string>;
}

export class Exam {
    id: string;
    name: string;
    examinerId: string;
    examiner: User;
    candidates?: Nullable<User[]>;
    candidatesId?: Nullable<string[]>;
    objectiveQuestions?: Nullable<ObjQuestion[]>;
    theoryQuestions?: Nullable<TheoryQuestion[]>;
    due: DateTimeISO;
    createdAt: DateTimeISO;
    updatedAt: DateTimeISO;
}

export class ObjQuestion {
    question: string;
    options: string[];
    answer: number;
}

export class TheoryQuestion {
    question: string;
    answers: string[];
}

export abstract class IMutation {
    abstract createExam(args: CreateExamArgs): Nullable<Exam> | Promise<Nullable<Exam>>;

    abstract deleteExam(id: string): Nullable<Exam> | Promise<Nullable<Exam>>;

    abstract updateUser(id: string, args: UpdateUserArgs): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IQuery {
    abstract exam(id: string): Nullable<Exam> | Promise<Nullable<Exam>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
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
    examsTaken?: Nullable<Exam[]>;
    examsSetId?: Nullable<string[]>;
    examsSet?: Nullable<Exam[]>;
    createdAt: DateTimeISO;
    updatedAt: DateTimeISO;
}

export type DateTimeISO = any;
type Nullable<T> = T | null;
