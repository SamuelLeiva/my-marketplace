import { z } from "zod"

export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), //SEO name (ejm: "nombre-categoria")
  description: z.string().optional(),
  parentId: z.string().uuid().nullable().optional(), //TODO: Add Subcategories logic
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

// --- GET: Query params for list ---
export const GetCategoriesQuerySchema = z.object({
  search: z.string().optional(), // e.g. search by name or slug
  sortBy: z.enum(["name", "createdAt", "updatedAt"]).optional(),
  order: z.enum(["asc", "desc"]).optional(),
  page: z.coerce.number().min(1).optional(),
  pageSize: z.coerce.number().min(1).max(100).optional(),
});

// --- GET: Param schema for /:id ---
export const GetCategoryByIdParamsSchema = z.object({
  id: z.string().uuid(),
});

// --- GET: Optional query by slug (if applicable) ---
export const GetCategoryBySlugQuerySchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
});

// --- POST: Body schema for create ---
export const CreateCategorySchema = CategorySchema.omit({ id: true, createdAt: true, updatedAt: true })
// --- PUT: Body schema for update ---
export const UpdateCategorySchema = CreateCategorySchema.partial()

export type Category = z.infer<typeof CategorySchema>
export type CreateCategoryInput = z.infer<typeof CreateCategorySchema>
export type UpdateCategoryInput = z.infer<typeof UpdateCategorySchema>
export type GetCategoriesQuery = z.infer<typeof GetCategoriesQuerySchema>;
export type GetCategoryByIdParams = z.infer<typeof GetCategoryByIdParamsSchema>;
export type GetCategoryBySlugQuery = z.infer<typeof GetCategoryBySlugQuerySchema>;