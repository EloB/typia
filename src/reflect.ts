import { IMetadataApplication } from "./schemas/metadata/IMetadataApplication";

/**
 * > You must configure the generic argument `Types`.
 *
 * Metadata Application.
 *
 * Creates a Metadata application which contains the metadata and components.
 *
 * Note that, all of the collection types like Array, Tuple and Objects are
 * stored in the {@link IMetadataApplication.components} property. Also, alias
 * types are stored in the {@link IMetadataApplication.aliases} property, too.
 *
 * @template Types Tuple of target types
 * @returns Metadata application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function metadata(): never;

/**
 * Metadata Application.
 *
 * Creates a Metadata application which contains the metadata and components.
 *
 * Note that, all of the collection types like Array, Tuple and Objects are
 * stored in the {@link IMetadataApplication.components} property. Also, alias
 * types are stored in the {@link IMetadataApplication.aliases} property, too.
 *
 * @template Types Tuple of target types
 * @returns Metadata application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function metadata<Types extends unknown[]>(): IMetadataApplication;

/**
 * @internal
 */
export function metadata(): never {
  halt("metadata");
}

/**
 * @internal
 */
export namespace metadata {
  export const from = (input: unknown) => input;
}

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.reflect.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
