import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createAssertGuard_DynamicTag = _test_assertGuard(
  "DynamicTag",
)<DynamicTag>(DynamicTag)(typia.createAssertGuard<DynamicTag>());
