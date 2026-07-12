import { z } from "zod";

export const createUserRequestSchema = z.object({
  name: z
    .string({
      error: "O campo 'name' é obrigatório.",
    })
    .min(1),
  email: z.email({
    error: "O formato do campo 'email' é inválido.",
  }),
  password: z
    .string({
      error: "O campo 'password' deve conter no mínimo 8 caracteres.",
    })
    .min(8),
  avatar: z.string().optional(),
  role: z
    .string({
      error: "O campo 'role' é obrigatório.",
    })
    .min(1),
  location: z
    .string({
      error: "O campo 'location' é obrigatório.",
    })
    .min(1),
  bio: z.string().optional(),
  stack: z.array(
    z
      .string({
        error: "O campo 'stack' deve conter no mínimo 1 item.",
      })
      .min(1),
  ),
  customLinks: z
    .array(
      z
        .url({
          error: "O campo 'customLinks' deve conter uma url válida.",
        })
        .optional(),
    )
    .default([]),
});

export const createUserResponseSchema = z
  .clone(createUserRequestSchema)
  .omit({
    password: true,
  })
  .extend({
    id: z.uuid(),
    tokens: z.object({
      accessToken: z.string(),
    }),
  });
