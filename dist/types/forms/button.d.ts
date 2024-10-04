import { z } from 'zod';
export declare const ButtonFormSchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
}, {
    label: z.ZodString;
    path: z.ZodString;
    value: z.ZodEffects<z.ZodString, string, string>;
    valueAlt: z.ZodUnion<[z.ZodLiteral<"">, z.ZodEffects<z.ZodString, string, string>]>;
    buttonType: z.ZodEnum<["Button", "Slider", "Toggle"]>;
    imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
    order: z.ZodNumber;
    useCost: z.ZodNullable<z.ZodNumber>;
    callbackParameters: z.ZodArray<z.ZodString, "many">;
    visibilityParameters: z.ZodArray<z.ZodString, "many">;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string;
    label: string;
    path: string;
    parentId: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: "Button" | "Slider" | "Toggle";
    callbackParameters: string[];
    visibilityParameters: string[];
    interactionKeyId: string | null;
}, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string;
    label: string;
    path: string;
    parentId: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: "Button" | "Slider" | "Toggle";
    callbackParameters: string[];
    visibilityParameters: string[];
    interactionKeyId: string | null;
}>, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string;
    label: string;
    path: string;
    parentId: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: "Button" | "Slider" | "Toggle";
    callbackParameters: string[];
    visibilityParameters: string[];
    interactionKeyId: string | null;
}, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string;
    label: string;
    path: string;
    parentId: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: "Button" | "Slider" | "Toggle";
    callbackParameters: string[];
    visibilityParameters: string[];
    interactionKeyId: string | null;
}>;
export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;
