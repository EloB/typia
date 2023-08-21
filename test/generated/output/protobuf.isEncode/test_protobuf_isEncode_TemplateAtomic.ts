import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_protobuf_isEncode_TemplateAtomic = _test_protobuf_isEncode(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    isEncode: (input) =>
        ((input: TemplateAtomic): Uint8Array | null => {
            const is = (input: any): input is TemplateAtomic => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.prefix &&
                    RegExp(/^prefix_(.*)/).test(input.prefix) &&
                    "string" === typeof input.postfix &&
                    RegExp(/(.*)_postfix$/).test(input.postfix) &&
                    "string" === typeof input.middle_string &&
                    RegExp(/^the_(.*)_value$/).test(input.middle_string) &&
                    "string" === typeof input.middle_string_empty &&
                    RegExp(/^the_(.*)_value$/).test(
                        input.middle_string_empty,
                    ) &&
                    "string" === typeof input.middle_numeric &&
                    RegExp(
                        /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                    ).test(input.middle_numeric) &&
                    ("the_false_value" === input.middle_boolean ||
                        "the_true_value" === input.middle_boolean) &&
                    "string" === typeof input.ipv4 &&
                    RegExp(
                        /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                    ).test(input.ipv4) &&
                    "string" === typeof input.email &&
                    RegExp(/(.*)@(.*)\.(.*)/).test(input.email);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const encode = (input: TemplateAtomic): Uint8Array => {
                const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                const $Writer = (typia.protobuf.isEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "prefix";
                        writer.uint32(10);
                        writer.string(input.prefix);
                        // property "postfix";
                        writer.uint32(18);
                        writer.string(input.postfix);
                        // property "middle_string";
                        writer.uint32(26);
                        writer.string(input.middle_string);
                        // property "middle_string_empty";
                        writer.uint32(34);
                        writer.string(input.middle_string_empty);
                        // property "middle_numeric";
                        writer.uint32(42);
                        writer.string(input.middle_numeric);
                        // property "middle_boolean";
                        writer.uint32(50);
                        writer.string(input.middle_boolean);
                        // property "ipv4";
                        writer.uint32(58);
                        writer.string(input.ipv4);
                        // property "email";
                        writer.uint32(66);
                        writer.string(input.email);
                    };
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
        'syntax = "proto3";\n\nmessage TemplateAtomic {\n    required string prefix = 1;\n    required string postfix = 2;\n    required string middle_string = 3;\n    required string middle_string_empty = 4;\n    required string middle_numeric = 5;\n    required string middle_boolean = 6;\n    required string ipv4 = 7;\n    required string email = 8;\n}',
});