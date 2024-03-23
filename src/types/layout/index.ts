import { z } from 'zod';
import { ContentBoxWidth } from '../../index';
import { BaseParentDTO, BaseParentIdSchema } from '../shared';
import { ButtonDTO } from '../button';

export const LayoutFormSchema = BaseParentIdSchema.extend({
    label: z.string().max(32),
    order: z.number(),
    width: z.nativeEnum(ContentBoxWidth),
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;

export interface LayoutDTO extends BaseParentDTO<LayoutDTO> {
    label?: string;
    order?: number;
    width?: ContentBoxWidth;
    buttons?: ButtonDTO[];
}
