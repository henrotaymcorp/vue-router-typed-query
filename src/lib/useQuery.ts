import { Schema } from "zod";
import { ParseSchemaReturnType, whenReady } from "./utils";

const useQuery = async <TSchema extends Schema>(
  schema: TSchema
): Promise<ParseSchemaReturnType<TSchema>> =>
  whenReady(({ query }) => schema.parse(query));

export default useQuery;
