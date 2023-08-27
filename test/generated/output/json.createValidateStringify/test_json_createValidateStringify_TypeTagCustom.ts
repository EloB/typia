import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_validateStringify_TypeTagCustom =
    _test_json_validateStringify("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
        (input: TypeTagCustom): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<TypeTagCustom> => {
                const errors = [] as any[];
                const __is = (input: any): input is TypeTagCustom => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).id &&
                        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                            (input as any).id,
                        ) &&
                        "string" === typeof (input as any).dollar &&
                        (input as any).dollar[0] === "$" &&
                        !isNaN(
                            Number(
                                (input as any).dollar
                                    .substring(1)
                                    .split(",")
                                    .join(""),
                            ),
                        ) &&
                        "string" === typeof (input as any).postfix &&
                        (input as any).postfix.endsWith("abcd")
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.json.createValidateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TypeTagCustom => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("string" === typeof input.id &&
                                    (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                                        input.id,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".id",
                                            expected: 'string & Format<"uuid">',
                                            value: input.id,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: '(string & Format<"uuid">)',
                                        value: input.id,
                                    }),
                                ("string" === typeof input.dollar &&
                                    ((input.dollar[0] === "$" &&
                                        !isNaN(
                                            Number(
                                                input.dollar
                                                    .substring(1)
                                                    .split(",")
                                                    .join(""),
                                            ),
                                        )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".dollar",
                                            expected: "string & Dolloar",
                                            value: input.dollar,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".dollar",
                                        expected: "(string & Dolloar)",
                                        value: input.dollar,
                                    }),
                                ("string" === typeof input.postfix &&
                                    (input.postfix.endsWith("abcd") ||
                                        $report(_exceptionable, {
                                            path: _path + ".postfix",
                                            expected:
                                                'string & Postfix<"abcd">',
                                            value: input.postfix,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".postfix",
                                        expected: '(string & Postfix<"abcd">)',
                                        value: input.postfix,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TypeTagCustom",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TypeTagCustom",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: TypeTagCustom): string => {
                const $string = (typia.json.createValidateStringify as any)
                    .string;
                return `{"id":${$string((input as any).id)},"dollar":${$string(
                    (input as any).dollar,
                )},"postfix":${$string((input as any).postfix)}}`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );