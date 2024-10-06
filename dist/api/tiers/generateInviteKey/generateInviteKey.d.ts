import { z } from 'zod';
export declare const GeneratedInviteKeySchema: z.ZodObject<z.objectUtil.extendShape<{
    key: z.ZodString;
    id: z.ZodString;
    tier: z.ZodObject<z.objectUtil.extendShape<{
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
        controlParameters: z.ZodNumber;
        parameterBadges: z.ZodNumber;
        groups: z.ZodNumber;
        buttons: z.ZodNumber;
        inviteKeys: z.ZodNumber;
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
        controlParameters: number;
        parameterBadges: number;
        inviteKeys: number;
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
        controlParameters: number;
        parameterBadges: number;
        inviteKeys: number;
    }>;
}, {
    used: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    key: string;
    id: string;
    tier: {
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
        controlParameters: number;
        parameterBadges: number;
        inviteKeys: number;
    };
    used: boolean;
}, {
    key: string;
    id: string;
    tier: {
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
        controlParameters: number;
        parameterBadges: number;
        inviteKeys: number;
    };
    used: boolean;
}>;
export type GeneratedInviteKeyDTO = z.infer<typeof GeneratedInviteKeySchema>;
