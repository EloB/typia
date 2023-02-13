import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ArrayHierarchical = _test_assertClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createAssertClone<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);