import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_random_TagInfinite = _test_random("TagInfinite")<TagInfinite>(
    TagInfinite,
)({
    random: () => typia.random<TagInfinite>(),
    assert: typia.createAssert<TagInfinite>(),
});
