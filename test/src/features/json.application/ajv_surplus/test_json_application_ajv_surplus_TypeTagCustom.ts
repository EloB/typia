import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_application_ajv_surplus_TypeTagCustom =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagCustom",
  })(typia.json.application<[TypeTagCustom], "ajv", true>());
