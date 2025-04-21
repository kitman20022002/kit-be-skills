/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */

import { camelToKebabCase, convertToLowerCase } from '../../utils/urlUtils';
import { awsConcepts } from '../seed/aws';
import { functionalProgrammingConcepts } from '../seed/functionalProgamming';
import { gitConcepts } from '../seed/git';
import { gitCoreConcepts } from '../seed/git-core';
import { JavaConcepts } from '../seed/java';
import { JSConcepts } from '../seed/js';
import { oopConcepts } from '../seed/oop';
import { reactConcepts } from '../seed/react';
import { reactCoreConcepts } from '../seed/react-core';
import { scrumConcepts } from '../seed/scrum';
import { securityConcepts } from '../seed/security';
import { springConcepts } from '../seed/spring';
import { typescriptConcepts } from '../seed/typescript';
import { sqlConcepts } from '../seed/sql';

export const frontEnd = {
  [convertToLowerCase(JSConcepts.name)]: JSConcepts,
  [convertToLowerCase(functionalProgrammingConcepts.name)]: functionalProgrammingConcepts,
  [convertToLowerCase(reactCoreConcepts.name)]: reactCoreConcepts,
  [convertToLowerCase(reactConcepts.name)]: reactConcepts,
  [convertToLowerCase(typescriptConcepts.name)]: typescriptConcepts,
};

const backEnd = {
  [convertToLowerCase(JavaConcepts.name)]: JavaConcepts,
  [convertToLowerCase(springConcepts.name)]: springConcepts,
  [convertToLowerCase(sqlConcepts.name)]: sqlConcepts,
  [convertToLowerCase(oopConcepts.name)]: oopConcepts,
};
const devops = { [convertToLowerCase(awsConcepts.name)]: awsConcepts };
const others = {
  [convertToLowerCase(securityConcepts.name)]: securityConcepts,
  [convertToLowerCase(scrumConcepts.name)]: scrumConcepts,
  [convertToLowerCase(gitConcepts.name)]: gitConcepts,
  [convertToLowerCase(gitCoreConcepts.name)]: gitCoreConcepts,
};

export const root = { frontEnd, backEnd, devops, others };

export const getStacksByCategory = (category: string) => {
  const matchCategory = Object.keys(root).find(
    (item) => camelToKebabCase(item) === category.toLowerCase(),
  );
  if (!matchCategory) {
    return null;
  }
  return root[matchCategory as keyof typeof root];
};

export const getConceptByStack = (stacks: any, stack: string, slug: string) => {
  const matchStack = Object.keys(stacks).find(
    (item) => stacks[item].name.replaceAll(' ', '-').toLowerCase() === stack.toLowerCase(),
  );

  if (!matchStack) {
    return null;
  }

  return stacks[matchStack]?.items[slug];
};

/////////////////////////
// 'first-class citizen '
////////////////////////
export const seedPost = async () => {
  // try {
  //   const bulkOps =  functionalProgrammingConcepts.map(post => {
  //     return {
  //       updateOne: {
  //         filter: { title: post.title },
  //         update: { $set: post },
  //         upsert: true,
  //       },
  //     };
  //   });
  //   await Post.bulkWrite(bulkOps)
  //     .catch((err:any) => console.error('Hobby Bulk operation error:', err));
  //   return Post.find({});
  // } catch (err) {
  //   console.error('Error seeding hobbies:', err);
  // }
};
