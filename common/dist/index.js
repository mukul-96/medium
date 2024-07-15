"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
const Zod_1 = __importDefault(require("Zod"));
exports.signupInput = Zod_1.default.object({
    username: Zod_1.default.string().email(),
    password: Zod_1.default.string().min(6),
    name: Zod_1.default.string().optional()
});
exports.signinInput = Zod_1.default.object({
    username: Zod_1.default.string().email(),
    password: Zod_1.default.string().min(6),
});
exports.createBlogInput = Zod_1.default.object({
    title: Zod_1.default.string(),
    content: Zod_1.default.string(),
});
exports.updateBlogInput = Zod_1.default.object({
    id: Zod_1.default.number(),
    title: Zod_1.default.string(),
    content: Zod_1.default.string()
});
