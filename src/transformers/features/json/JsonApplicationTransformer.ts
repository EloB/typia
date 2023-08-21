import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { IJsonApplication } from "../../../schemas/json/IJsonApplication";
import { Metadata } from "../../../schemas/metadata/Metadata";

import { JsonApplicationProgrammer } from "../../../programmers/json/JsonApplicationProgrammer";

import { IProject } from "../../IProject";

export namespace JsonApplicationTransformer {
    export const transform =
        ({ checker }: IProject) =>
        (expression: ts.CallExpression): ts.Expression => {
            if (!expression.typeArguments?.length)
                throw new Error(NO_GENERIC_ARGUMENT);

            //----
            // GET ARGUMENTS
            //----
            // VALIDATE TUPLE ARGUMENTS
            const top: ts.Node = expression.typeArguments[0]!;
            if (!ts.isTupleTypeNode(top)) return expression;
            else if (top.elements.some((child) => !ts.isTypeNode(child)))
                return expression;

            // GET TYPES
            const types: ts.Type[] = top.elements.map((child) =>
                checker.getTypeFromTypeNode(child as ts.TypeNode),
            );
            if (types.some((t) => t.isTypeParameter()))
                throw new Error(GENERIC_ARGUMENT);

            // ADDITIONAL PARAMETERS
            const purpose: "swagger" | "ajv" = get_parameter(
                checker,
                "Purpose",
                expression.typeArguments[1],
                (str) => str === "swagger" || str === "ajv",
                () => "swagger",
            );

            //----
            // GENERATORS
            //----
            // METADATA
            const collection: MetadataCollection = new MetadataCollection();
            const metadatas: Array<Metadata> = types.map((type) =>
                MetadataFactory.analyze(checker)({
                    resolve: true,
                    constant: true,
                    absorb: false,
                    validate: (meta) => {
                        if (meta.atomics.find((str) => str === "bigint"))
                            throw new Error(NO_BIGIT);
                        else if (
                            meta.arrays.some(
                                (array) => array.value.isRequired() === false,
                            )
                        )
                            throw new Error(NO_UNDEFINED_IN_ARRAY);
                    },
                })(collection)(type),
            );

            // APPLICATION
            const app: IJsonApplication = JsonApplicationProgrammer.write({
                purpose,
            })(metadatas);

            // RETURNS WITH LITERAL EXPRESSION
            return LiteralFactory.generate(app);
        };

    const get_parameter = <T extends string>(
        checker: ts.TypeChecker,
        name: string,
        node: ts.TypeNode | undefined,
        predicator: (value: string) => boolean,
        defaulter: () => T,
    ): T => {
        if (!node) return defaulter();

        // CHECK LITERAL TYPE
        const type: ts.Type = checker.getTypeFromTypeNode(node);
        if (!type.isLiteral())
            throw new Error(
                `Error on typia.application(): generic argument "${name}" must be constant.`,
            );

        // GET VALUE AND VALIDATE IT
        const value = type.value;
        if (typeof value !== "string" || predicator(value) === false)
            throw new Error(
                `Error on typia.application(): invalid value on generic argument "${name}".`,
            );
        return value as T;
    };
}

const NO_GENERIC_ARGUMENT =
    "Error on typia.json.application(): no generic argument.";
const GENERIC_ARGUMENT =
    "Error on typia.json.application(): non-specified generic argument(s).";
const NO_BIGIT =
    "Error on typia.json.application(): does not allow bigint type.";
const NO_UNDEFINED_IN_ARRAY =
    "Error on typia.json.application(): does not allow undefined type in array.";