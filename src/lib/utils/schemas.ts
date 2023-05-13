import { SafeParseReturnType, Schema, TypeOf } from "zod";

/** Type representing schema */
export type SchemaType<TSchema extends Schema> = TypeOf<TSchema>;

/** parse() return properly inferred */
export type ParseSchemaReturnType<TSchema extends Schema> = SchemaType<TSchema>;

/** safeParse() return properly inferred */
export type SafeParseSchemaReturnType<TSchema extends Schema> =
  SafeParseReturnType<SchemaType<TSchema>, SchemaType<TSchema>>;
