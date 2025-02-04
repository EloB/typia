import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../../structures/ObjectUndefined";

export const test_json_application_swagger_surplus_ObjectUndefined =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUndefined",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUndefined",
      },
    ],
    components: {
      schemas: {
        ObjectUndefined: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectUndefined.ILecture",
          },
        },
        "ObjectUndefined.ILecture": {
          type: "object",
          properties: {
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            professor: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            classroom: {
              $ref: "#/components/schemas/ObjectUndefined.IClassroom",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            grade: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            unknown: {
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["name", "unknown"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUndefined.IClassroom": {
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
