"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscValidateCloneProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const ValidateProgrammer_1 = require("../ValidateProgrammer");
const MiscCloneProgrammer_1 = require("./MiscCloneProgrammer");
var MiscValidateCloneProgrammer;
(function (MiscValidateCloneProgrammer) {
    MiscValidateCloneProgrammer.write = (project) => (modulo) => (type, name) => typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("input", TypeFactory_1.TypeFactory.keyword("any")),
    ], typescript_1.default.factory.createTypeReferenceNode(`typia.IValidation<typia.Resolved<${name ?? TypeFactory_1.TypeFactory.getFullName(project.checker)(type)}>>`), undefined, typescript_1.default.factory.createBlock([
        StatementFactory_1.StatementFactory.constant("validate", ValidateProgrammer_1.ValidateProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: true,
            },
        })(modulo)(false)(type, name)),
        StatementFactory_1.StatementFactory.constant("clone", MiscCloneProgrammer_1.MiscCloneProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: false,
            },
        })(modulo)(type, name)),
        StatementFactory_1.StatementFactory.constant("output", typescript_1.default.factory.createAsExpression(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("validate"), undefined, [typescript_1.default.factory.createIdentifier("input")]), TypeFactory_1.TypeFactory.keyword("any"))),
        typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createIdentifier("output.success"), typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createBinaryExpression(typescript_1.default.factory.createIdentifier("output.data"), typescript_1.default.SyntaxKind.EqualsToken, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("clone"), undefined, [typescript_1.default.factory.createIdentifier("input")])))),
        typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier("output")),
    ]));
})(MiscValidateCloneProgrammer || (exports.MiscValidateCloneProgrammer = MiscValidateCloneProgrammer = {}));