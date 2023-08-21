import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TagType } from "../../../structures/TagType";

export const test_protobuf_isEncode_TagType = _test_protobuf_isEncode(
    "TagType",
)<TagType>(TagType)({
    isEncode: (input) =>
        ((input: TagType): Uint8Array | null => {
            const is = (input: any): input is TagType => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.int &&
                    Number.isFinite(input.int) &&
                    Math.floor(input.int) === input.int &&
                    -2147483648 <= input.int &&
                    input.int <= 2147483647 &&
                    "number" === typeof input.uint &&
                    Number.isFinite(input.uint) &&
                    Math.floor(input.uint) === input.uint &&
                    0 <= input.uint &&
                    input.uint <= 4294967295 &&
                    "number" === typeof input.int32 &&
                    Number.isFinite(input.int32) &&
                    Math.floor(input.int32) === input.int32 &&
                    -2147483648 <= input.int32 &&
                    input.int32 <= 2147483647 &&
                    "number" === typeof input.uint32 &&
                    Number.isFinite(input.uint32) &&
                    Math.floor(input.uint32) === input.uint32 &&
                    0 <= input.uint32 &&
                    input.uint32 <= 4294967295 &&
                    "number" === typeof input.int64 &&
                    Number.isFinite(input.int64) &&
                    Math.floor(input.int64) === input.int64 &&
                    -9223372036854776000 <= input.int64 &&
                    input.int64 <= 9223372036854776000 &&
                    "number" === typeof input.uint64 &&
                    Number.isFinite(input.uint64) &&
                    Math.floor(input.uint64) === input.uint64 &&
                    0 <= input.uint64 &&
                    input.uint64 <= 18446744073709552000 &&
                    "number" === typeof input.float &&
                    Number.isFinite(input.float) &&
                    -1.175494351e38 <= input.float &&
                    input.float <= 3.4028235e38;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const encode = (input: TagType): Uint8Array => {
                const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                const $Writer = (typia.protobuf.isEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        if (0 !== input.value.length) {
                            for (const elem of input.value) {
                                writer.uint32(10);
                                writer.fork();
                                $peo1(elem);
                                writer.ldelim();
                            }
                        }
                    };
                    const $peo1 = (input: any): any => {
                        // property "int";
                        writer.uint32(8);
                        writer.int32(input.int);
                        // property "uint";
                        writer.uint32(16);
                        writer.uint32(input.uint);
                        // property "int32";
                        writer.uint32(24);
                        writer.int32(input.int32);
                        // property "uint32";
                        writer.uint32(32);
                        writer.uint32(input.uint32);
                        // property "int64";
                        writer.uint32(40);
                        writer.int64(input.int64);
                        // property "uint64";
                        writer.uint32(48);
                        writer.uint64(input.uint64);
                        // property "float";
                        writer.uint32(61);
                        writer.float(input.float);
                    };
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.int &&
                        Math.floor(input.int) === input.int &&
                        -2147483648 <= input.int &&
                        input.int <= 2147483647 &&
                        "number" === typeof input.uint &&
                        Math.floor(input.uint) === input.uint &&
                        0 <= input.uint &&
                        input.uint <= 4294967295 &&
                        "number" === typeof input.int32 &&
                        Math.floor(input.int32) === input.int32 &&
                        -2147483648 <= input.int32 &&
                        input.int32 <= 2147483647 &&
                        "number" === typeof input.uint32 &&
                        Math.floor(input.uint32) === input.uint32 &&
                        0 <= input.uint32 &&
                        input.uint32 <= 4294967295 &&
                        "number" === typeof input.int64 &&
                        Math.floor(input.int64) === input.int64 &&
                        -9223372036854776000 <= input.int64 &&
                        input.int64 <= 9223372036854776000 &&
                        "number" === typeof input.uint64 &&
                        Math.floor(input.uint64) === input.uint64 &&
                        0 <= input.uint64 &&
                        input.uint64 <= 18446744073709552000 &&
                        "number" === typeof input.float &&
                        -1.175494351e38 <= input.float &&
                        input.float <= 3.4028235e38;
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return is(input) ? encode(input) : null;
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagType {\n    repeated TagType.Type value = 1;\n    message Type {\n        required int32 int = 1;\n        required uint32 uint = 2;\n        required int32 int32 = 3;\n        required uint32 uint32 = 4;\n        required int64 int64 = 5;\n        required uint64 uint64 = 6;\n        required float float = 7;\n    }\n}',
});