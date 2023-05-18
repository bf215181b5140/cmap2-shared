import { z } from 'zod';
import { ButtonType, ValueType } from './index';
export declare const registrationSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    passwordOne: z.ZodString;
    passwordTwo: z.ZodString;
    activationKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username?: string;
    passwordOne?: string;
    passwordTwo?: string;
    activationKey?: string;
}, {
    username?: string;
    passwordOne?: string;
    passwordTwo?: string;
    activationKey?: string;
}>, {
    username?: string;
    passwordOne?: string;
    passwordTwo?: string;
    activationKey?: string;
}, {
    username?: string;
    passwordOne?: string;
    passwordTwo?: string;
    activationKey?: string;
}>;
export declare const profileSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    hidden: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
}, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
}>;
export declare const avatarSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    vrcId: z.ZodString;
    label: z.ZodString;
    default: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
}, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
}>;
export declare const layoutSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    order: z.ZodNumber;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    order?: number;
    parentId?: string;
}, {
    id?: string;
    label?: string;
    order?: number;
    parentId?: string;
}>;
export declare const buttonSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodNullable<z.ZodString>;
    path: z.ZodString;
    value: z.ZodString;
    valueAlt: z.ZodNullable<z.ZodString>;
    valueType: z.ZodNativeEnum<typeof ValueType>;
    buttonType: z.ZodNativeEnum<typeof ButtonType>;
    order: z.ZodNumber;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    order?: number;
    parentId?: string;
}, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    order?: number;
    parentId?: string;
}>, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    order?: number;
    parentId?: string;
}, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    order?: number;
    parentId?: string;
}>;
