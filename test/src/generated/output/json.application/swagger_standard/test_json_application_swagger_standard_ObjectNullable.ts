import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_json_application_swagger_standard_ObjectNullable =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectNullable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectNullable",
      },
    ],
    components: {
      schemas: {
        ObjectNullable: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectNullable.IProduct",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectNullable.IProduct": {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            manufacturer: {
              $ref: "#/components/schemas/ObjectNullable.IManufacturer",
            },
            brand: {
              $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
            },
            similar: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
                },
                {
                  $ref: "#/components/schemas/ObjectNullable.IManufacturer.Nullable",
                },
              ],
            },
          },
          nullable: false,
          required: ["name", "manufacturer", "brand", "similar"],
        },
        "ObjectNullable.IManufacturer": {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["manufacturer"],
            },
            name: {
              type: "string",
            },
          },
          nullable: false,
          required: ["type", "name"],
        },
        "ObjectNullable.IBrand.Nullable": {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["brand"],
            },
            name: {
              type: "string",
            },
          },
          nullable: true,
          required: ["type", "name"],
        },
        "ObjectNullable.IManufacturer.Nullable": {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["manufacturer"],
            },
            name: {
              type: "string",
            },
          },
          nullable: true,
          required: ["type", "name"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
