import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_validateDecode_TagBigInt =
    _test_protobuf_validateDecode("TagBigInt")<TagBigInt>(TagBigInt)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TagBigInt>(input),
        encode: typia.protobuf.createEncode<TagBigInt>(),
    });