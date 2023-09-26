import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    // api/trpc/getPrompts
    getPrompts: publicProcedure.query(async () => {
        return [{ user: "123", prompt: "I am Pokemon", response: "Charizard" }, { user: "123", prompt: "I love pikachu", reponse: "Pikachu" }]
    })
})

export type AppRouter = typeof appRouter;