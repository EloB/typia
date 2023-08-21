import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_json_isStringify_TagArrayUnion = _test_json_isStringify(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    typia.json.isStringify<TagArrayUnion>(input),
);