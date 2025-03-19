import { z } from 'zod';
export declare const parameterPathSchema: z.ZodString;
export declare const parameterValueAvatarIdSchema: z.ZodString;
export declare const parameterValueStringSchema: z.ZodEffects<z.ZodString, number | boolean, string>;
export declare const parameterValueNumberSchema: z.ZodEffects<z.ZodNumber, number, number>;
export declare const parameterValueSchema: z.ZodUnion<[z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
export declare const parameterValueFormSchema: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
export declare const parameterValueOrAvatarSchema: z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
export declare const parameterValueOrAvatarFormSchema: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodString, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
export declare const parameterValueSimpleSchema: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
export declare const parameterValueOrAvatarSimpleSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
