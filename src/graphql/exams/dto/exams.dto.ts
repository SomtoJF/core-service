import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsMongoId,
  IsString,
  IsDate,
  IsArray,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class examsIdDto {
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}

type TheoryQuestionType = {
  question: string;
  answers: string[];
};

class TheoryQuestion {
  @IsString()
  question: string;

  @IsString({ each: true }) // Validate each element of the array
  answers: string[];
}

type ObjectiveQuestionType = {
  question: string;
  options: string[];
  answer: number;
};

class ObjectiveQuestion {
  @IsString()
  question: string;

  @IsString({ each: true }) // Validate each element of the array
  options: string[];

  @IsNumber()
  @IsPositive()
  answer: number;
}

export class createExamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsMongoId()
  @IsNotEmpty()
  examinerId: string;

  @IsOptional()
  @IsArray()
  @Type(() => TheoryQuestion)
  theoryQuestions: TheoryQuestionType[];

  @IsOptional()
  @IsArray()
  @Type(() => ObjectiveQuestion)
  objectiveQuestions: ObjectiveQuestionType[];

  @IsDate()
  @IsNotEmpty()
  due: Date;
}
