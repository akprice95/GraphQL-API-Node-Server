/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  StatsWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Query: {};
  Stats: prisma.Stats;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  StatsWhereUniqueInput: NexusGenInputs['StatsWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createStats: NexusGenRootTypes['Stats']; // Stats!
    deleteOneStats: NexusGenRootTypes['Stats'] | null; // Stats
    updateStats: NexusGenRootTypes['Stats']; // Stats!
  }
  Query: { // field return type
    filterStat: NexusGenRootTypes['Stats'][]; // [Stats!]!
    Stat: NexusGenRootTypes['Stats'] | null; // Stats
    Stats: NexusGenRootTypes['Stats'][]; // [Stats!]!
  }
  Stats: { // field return type
    createdAt: any; // DateTime!
    GamerTag: string; // String!
    id: string; // String!
    KD: string; // String!
    name: string; // String!
    Platform: string; // String!
    updatedAt: any; // DateTime!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createStats: { // args
      GamerTag?: string | null; // String
      KD?: string | null; // String
      name?: string | null; // String
      Platform?: string | null; // String
    }
    deleteOneStats: { // args
      where: NexusGenInputs['StatsWhereUniqueInput']; // StatsWhereUniqueInput!
    }
    updateStats: { // args
      GamerTag?: string | null; // String
      id?: string | null; // ID
      KD?: string | null; // String
      name?: string | null; // String
      Platform?: string | null; // String
    }
  }
  Query: {
    filterStat: { // args
      searchString?: string | null; // String
    }
    Stat: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Query" | "Stats";

export type NexusGenInputNames = "StatsWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}