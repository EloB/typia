import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagArray } from "../../../../structures/CommentTagArray";

export const test_json_application_swagger_surplus_CommentTagArray =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "CommentTagArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagArray",
      },
    ],
    components: {
      schemas: {
        CommentTagArray: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagArray.Type",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "CommentTagArray.Type": {
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                type: "string",
              },
              maxItems: 3,
              minItems: 3,
              "x-typia-typeTags": [
                {
                  target: "array",
                  name: "MinItems<3>",
                  kind: "minItems",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "array",
                  name: "MaxItems<3>",
                  kind: "maxItems",
                  value: 3,
                  validate: "$input.length <= 3",
                  exclusive: true,
                },
              ],
              "x-typia-jsDocTags": [
                {
                  name: "items",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            minItems: {
              type: "array",
              items: {
                type: "number",
              },
              minItems: 3,
              "x-typia-typeTags": [
                {
                  target: "array",
                  name: "MinItems<3>",
                  kind: "minItems",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
              ],
              "x-typia-jsDocTags": [
                {
                  name: "minItems",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            both: {
              type: "array",
              items: {
                type: "string",
              },
              maxItems: 7,
              minItems: 3,
              "x-typia-typeTags": [
                {
                  target: "array",
                  name: "MinItems<3>",
                  kind: "minItems",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "array",
                  name: "MaxItems<7>",
                  kind: "maxItems",
                  value: 7,
                  validate: "$input.length <= 7",
                  exclusive: true,
                },
              ],
              "x-typia-jsDocTags": [
                {
                  name: "minItems",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "maxItems",
                  text: [
                    {
                      text: "7",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            equal: {
              type: "array",
              items: {
                type: "number",
              },
              maxItems: 10,
              minItems: 10,
              "x-typia-typeTags": [
                {
                  target: "array",
                  name: "MinItems<10>",
                  kind: "minItems",
                  value: 10,
                  validate: "10 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "array",
                  name: "MaxItems<10>",
                  kind: "maxItems",
                  value: 10,
                  validate: "$input.length <= 10",
                  exclusive: true,
                },
              ],
              "x-typia-jsDocTags": [
                {
                  name: "minItems",
                  text: [
                    {
                      text: "10",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "maxItems",
                  text: [
                    {
                      text: "10",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["items", "minItems", "both", "equal"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });