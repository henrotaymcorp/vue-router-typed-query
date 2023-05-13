import { Schema } from "zod";
import { SafeParseSchemaReturnType, whenReady } from "./utils";

const useSafeQuery = <TSchema extends Schema>(
  schema: TSchema
): Promise<SafeParseSchemaReturnType<TSchema>> =>
  whenReady(({ query }) => schema.safeParse(query));

export default useSafeQuery;
