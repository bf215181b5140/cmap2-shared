"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientVersionFormSchema = exports.ClientVersionSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.ClientVersionSchema = shared_1.BaseIdSchema.extend({
    version: zod_1.z.string().min(5).max(16),
    download: zod_1.z.string().min(1).max(512),
    description: zod_1.z.string().max(2048),
    date: zod_1.z.date(),
});
exports.ClientVersionFormSchema = zod_1.z.object({
    versions: zod_1.z.array(exports.ClientVersionSchema),
});
