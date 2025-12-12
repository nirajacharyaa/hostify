import z from "zod";

export const propertySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  numberOfReviews: z.number(),
  averageRating: z.number(),
  location: z.string(),
  hostName: z.string(),
  superhost: z.boolean(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  maxGuests: z.number(),
  image: z.string(),
});

export type Property = z.infer<typeof propertySchema>;

export const paginatedPropertiesSchema = z.object({
  data: z.array(propertySchema),
  pagination: z.object({
    currentPage: z.number(),
    totalPages: z.number(),
    totalProperties: z.number(),
    propertiesPerPage: z.number(),
    hasNextPage: z.boolean(),
    hasPreviousPage: z.boolean(),
  }),
});

export type PaginatedProperties = z.infer<typeof paginatedPropertiesSchema>;
