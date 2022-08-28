// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { guestbookRouter } from "./guestbook";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", protectedExampleRouter);
  .merge('guestbook.', guestbookRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
