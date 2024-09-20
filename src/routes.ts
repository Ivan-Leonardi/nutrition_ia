import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/create",
    async (request: FastifyRequest, replay: FastifyReply) => {
      return new CreateNutritionController().handle(request, replay);
    }
  );
}
