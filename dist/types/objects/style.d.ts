import { z } from 'zod';
export declare const StyleSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    tier: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        rank: z.ZodNumber;
        label: z.ZodString;
        color: z.ZodString;
        interactionKeys: z.ZodNumber;
        layouts: z.ZodNumber;
        avatars: z.ZodNumber;
        useCost: z.ZodBoolean;
        health: z.ZodBoolean;
        callbacks: z.ZodNumber;
        stateBadges: z.ZodNumber;
        groups: z.ZodNumber;
        buttons: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        callbacks: number;
        stateBadges: number;
    }, {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        callbacks: number;
        stateBadges: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    tier?: {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        callbacks: number;
        stateBadges: number;
    } | undefined;
}, {
    id: string;
    label: string;
    tier?: {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        callbacks: number;
        stateBadges: number;
    } | undefined;
}>;
export type StyleDTO = z.infer<typeof StyleSchema>;
