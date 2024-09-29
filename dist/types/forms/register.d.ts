import { z } from 'zod';
export declare const RegisterFormSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    passwordRepeat: z.ZodString;
    fingerprint: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}>, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}>;
export type RegisterFormDTO = z.infer<typeof RegisterFormSchema>;
export declare const RegisterWithKeyFormSchema: z.ZodIntersection<z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    passwordRepeat: z.ZodString;
    fingerprint: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}>, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}>, z.ZodObject<{
    accountKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountKey: string;
}, {
    accountKey: string;
}>>;
export type RegisterWithKeyFormDTO = z.infer<typeof RegisterWithKeyFormSchema>;
