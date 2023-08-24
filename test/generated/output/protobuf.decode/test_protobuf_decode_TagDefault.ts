import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { TagDefault } from "../../../structures/TagDefault";

export const test_protobuf_decode_TagDefault = _test_protobuf_decode(
    "TagDefault",
)<TagDefault>(TagDefault)({
    decode: (input) =>
        ((input: Uint8Array): typia.Resolved<TagDefault> => {
            const $Reader = (typia.protobuf.decode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    boolean: undefined as any,
                    number: undefined as any,
                    string: "" as any,
                    text: "" as any,
                    template: undefined as any,
                    boolean_and_number_and_string: "" as any,
                    union_but_boolean: "" as any,
                    union_but_number: "" as any,
                    union_but_string: "" as any,
                    vulnerable_range: undefined as any,
                    vulnerable_template: undefined as any,
                    boolean_and_number_and_template: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // boolean;
                            output.boolean = reader.bool();
                            break;
                        case 2:
                            // number;
                            output.number = reader.double();
                            break;
                        case 3:
                            // string;
                            output.string = reader.string();
                            break;
                        case 4:
                            // string;
                            output.text = reader.string();
                            break;
                        case 5:
                            // string;
                            output.template = reader.string();
                            break;
                        case 6:
                            // boolean;
                            output.boolean_and_number_and_string =
                                reader.bool();
                            break;
                        case 7:
                            // number;
                            output.boolean_and_number_and_string =
                                reader.double();
                            break;
                        case 8:
                            // string;
                            output.boolean_and_number_and_string =
                                reader.string();
                            break;
                        case 9:
                            // boolean;
                            output.union_but_boolean = reader.bool();
                            break;
                        case 10:
                            // number;
                            output.union_but_boolean = reader.double();
                            break;
                        case 11:
                            // string;
                            output.union_but_boolean = reader.string();
                            break;
                        case 12:
                            // boolean;
                            output.union_but_number = reader.bool();
                            break;
                        case 13:
                            // number;
                            output.union_but_number = reader.double();
                            break;
                        case 14:
                            // string;
                            output.union_but_number = reader.string();
                            break;
                        case 15:
                            // boolean;
                            output.union_but_string = reader.bool();
                            break;
                        case 16:
                            // number;
                            output.union_but_string = reader.double();
                            break;
                        case 17:
                            // string;
                            output.union_but_string = reader.string();
                            break;
                        case 18:
                            // number;
                            output.vulnerable_range = reader.double();
                            break;
                        case 19:
                            // string;
                            output.vulnerable_template = reader.string();
                            break;
                        case 20:
                            // boolean;
                            output.boolean_and_number_and_template =
                                reader.bool();
                            break;
                        case 21:
                            // number;
                            output.boolean_and_number_and_template =
                                reader.double();
                            break;
                        case 22:
                            // string;
                            output.boolean_and_number_and_template =
                                reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const reader = new $Reader(input);
            return $pdo0(reader);
        })(input),
    encode: (input: TagDefault): Uint8Array => {
        const $throws = (typia.protobuf.createEncode as any).throws;
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "boolean";
                writer.uint32(8);
                writer.bool(input.boolean);
                // property "number";
                writer.uint32(17);
                writer.double(input.number);
                // property "string";
                writer.uint32(26);
                writer.string(input.string);
                // property "text";
                writer.uint32(34);
                writer.string(input.text);
                // property "template";
                writer.uint32(42);
                writer.string(input.template);
                // property "boolean_and_number_and_string";
                if ("boolean" === typeof input.boolean_and_number_and_string) {
                    writer.uint32(48);
                    writer.bool(input.boolean_and_number_and_string);
                } else if (
                    "number" === typeof input.boolean_and_number_and_string
                ) {
                    writer.uint32(57);
                    writer.double(input.boolean_and_number_and_string);
                } else if (
                    "string" === typeof input.boolean_and_number_and_string
                ) {
                    writer.uint32(66);
                    writer.string(input.boolean_and_number_and_string);
                } else
                    $throws({
                        expected: "(boolean | number | string)",
                        value: input.boolean_and_number_and_string,
                    });
                // property "union_but_boolean";
                if ("boolean" === typeof input.union_but_boolean) {
                    writer.uint32(72);
                    writer.bool(input.union_but_boolean);
                } else if ("number" === typeof input.union_but_boolean) {
                    writer.uint32(81);
                    writer.double(input.union_but_boolean);
                } else if ("string" === typeof input.union_but_boolean) {
                    writer.uint32(90);
                    writer.string(input.union_but_boolean);
                } else
                    $throws({
                        expected: "(boolean | number | string)",
                        value: input.union_but_boolean,
                    });
                // property "union_but_number";
                if ("boolean" === typeof input.union_but_number) {
                    writer.uint32(96);
                    writer.bool(input.union_but_number);
                } else if ("number" === typeof input.union_but_number) {
                    writer.uint32(105);
                    writer.double(input.union_but_number);
                } else if ("string" === typeof input.union_but_number) {
                    writer.uint32(114);
                    writer.string(input.union_but_number);
                } else
                    $throws({
                        expected: "(boolean | number | string)",
                        value: input.union_but_number,
                    });
                // property "union_but_string";
                if ("boolean" === typeof input.union_but_string) {
                    writer.uint32(120);
                    writer.bool(input.union_but_string);
                } else if ("number" === typeof input.union_but_string) {
                    writer.uint32(129);
                    writer.double(input.union_but_string);
                } else if ("string" === typeof input.union_but_string) {
                    writer.uint32(138);
                    writer.string(input.union_but_string);
                } else
                    $throws({
                        expected: "(boolean | number | string)",
                        value: input.union_but_string,
                    });
                // property "vulnerable_range";
                writer.uint32(145);
                writer.double(input.vulnerable_range);
                // property "vulnerable_template";
                writer.uint32(154);
                writer.string(input.vulnerable_template);
                // property "boolean_and_number_and_template";
                if (
                    "boolean" === typeof input.boolean_and_number_and_template
                ) {
                    writer.uint32(160);
                    writer.bool(input.boolean_and_number_and_template);
                } else if (
                    "number" === typeof input.boolean_and_number_and_template
                ) {
                    writer.uint32(169);
                    writer.double(input.boolean_and_number_and_template);
                } else if (
                    "string" === typeof input.boolean_and_number_and_template
                ) {
                    writer.uint32(178);
                    writer.string(input.boolean_and_number_and_template);
                } else
                    $throws({
                        expected: "(`prefix_${string}` | boolean | number)",
                        value: input.boolean_and_number_and_template,
                    });
            };
            //TagDefault;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
