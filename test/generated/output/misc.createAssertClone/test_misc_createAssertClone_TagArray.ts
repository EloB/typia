import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { TagArray } from "../../../structures/TagArray";

export const test_misc_assertClone_TagArray = _test_misc_assertClone(
    "TagArray",
)<TagArray>(TagArray)((input: any): typia.Resolved<TagArray> => {
    const assert = (input: any): TagArray => {
        const __is = (input: any): input is TagArray => {
            const $is_uuid = (typia.misc.createAssertClone as any).is_uuid;
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 === input.items.length &&
                input.items.every(
                    (elem: any) => "string" === typeof elem && $is_uuid(elem),
                ) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every(
                    (elem: any) =>
                        "number" === typeof elem &&
                        Number.isFinite(elem) &&
                        3 <= elem,
                ) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                7 >= input.both.length &&
                input.both.every(
                    (elem: any) => "string" === typeof elem && $is_uuid(elem),
                ) &&
                Array.isArray(input.equal) &&
                10 <= input.equal.length &&
                10 >= input.equal.length &&
                input.equal.every(
                    (elem: any) =>
                        "number" === typeof elem && 10 <= elem && 10 >= elem,
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagArray => {
                const $guard = (typia.misc.createAssertClone as any).guard;
                const $is_uuid = (typia.misc.createAssertClone as any).is_uuid;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagArray.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagArray.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagArray.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagArray.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((((Array.isArray(input.items) &&
                        (3 === input.items.length ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array.length (@items 3)",
                                value: input.items,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        })) &&
                        input.items.every(
                            (elem: any, _index2: number) =>
                                ("string" === typeof elem &&
                                    ($is_uuid(elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".items[" +
                                                _index2 +
                                                "]",
                                            expected: "string (@format uuid)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index2 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        })) &&
                    ((((Array.isArray(input.minItems) &&
                        (3 <= input.minItems.length ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: "Array.length (@minItems 3)",
                                value: input.minItems,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        })) &&
                        input.minItems.every(
                            (elem: any, _index3: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    (3 <= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".minItems[" +
                                                _index3 +
                                                "]",
                                            expected: "number (@minimum 3)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minItems[" + _index3 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        })) &&
                    ((((Array.isArray(input.both) &&
                        (3 <= input.both.length ||
                            $guard(_exceptionable, {
                                path: _path + ".both",
                                expected: "Array.length (@minItems 3)",
                                value: input.both,
                            })) &&
                        (7 >= input.both.length ||
                            $guard(_exceptionable, {
                                path: _path + ".both",
                                expected: "Array.length (@maxItems 7)",
                                value: input.both,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        })) &&
                        input.both.every(
                            (elem: any, _index4: number) =>
                                ("string" === typeof elem &&
                                    ($is_uuid(elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".both[" +
                                                _index4 +
                                                "]",
                                            expected: "string (@format uuid)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".both[" + _index4 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        })) &&
                    ((((Array.isArray(input.equal) &&
                        (10 <= input.equal.length ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "Array.length (@minItems 10)",
                                value: input.equal,
                            })) &&
                        (10 >= input.equal.length ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "Array.length (@maxItems 10)",
                                value: input.equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "Array<number>",
                            value: input.equal,
                        })) &&
                        input.equal.every(
                            (elem: any, _index5: number) =>
                                ("number" === typeof elem &&
                                    (10 <= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".equal[" +
                                                _index5 +
                                                "]",
                                            expected: "number (@minimum 10)",
                                            value: elem,
                                        })) &&
                                    (10 >= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".equal[" +
                                                _index5 +
                                                "]",
                                            expected: "number (@maximum 10)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal[" + _index5 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "Array<number>",
                            value: input.equal,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagArray",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagArray",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    const clone = (input: TagArray): typia.Resolved<TagArray> => {
        const $io1 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 === input.items.length &&
            input.items.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
                (elem: any) => "number" === typeof elem && 3 <= elem,
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            7 >= input.both.length &&
            input.both.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            10 >= input.equal.length &&
            input.equal.every(
                (elem: any) =>
                    "number" === typeof elem && 10 <= elem && 10 >= elem,
            );
        const $is_uuid = (typia.misc.createAssertClone as any).is_uuid;
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co1(elem)
                    : (elem as any),
            );
        const $cp1 = (input: any) => input.map((elem: any) => elem as any);
        const $cp2 = (input: any) => input.map((elem: any) => elem as any);
        const $co0 = (input: any): any => ({
            value: Array.isArray(input.value)
                ? $cp0(input.value)
                : (input.value as any),
        });
        const $co1 = (input: any): any => ({
            items: Array.isArray(input.items)
                ? $cp1(input.items)
                : (input.items as any),
            minItems: Array.isArray(input.minItems)
                ? $cp2(input.minItems)
                : (input.minItems as any),
            both: Array.isArray(input.both)
                ? $cp1(input.both)
                : (input.both as any),
            equal: Array.isArray(input.equal)
                ? $cp2(input.equal)
                : (input.equal as any),
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
});
