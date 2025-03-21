import { z } from 'zod';
import { GroupWidthSchema } from '../../../enums/groupWidth';
import { VisibilityParameterFormSchema } from '../../../objects/visibilityParameter';
import { idSchema, interactionKeyIdSchema, labelOptionalSchema } from '../../../primitives/shared';

export const GroupFormSchema = z.object({
  layoutId: idSchema,
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(VisibilityParameterFormSchema),
  interactionKeyId: interactionKeyIdSchema,
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;

export const GroupCopySchema = z.object({
  layoutId: idSchema,
  id: idSchema,
});

export type GroupCopyDTO = z.infer<typeof GroupCopySchema>;
