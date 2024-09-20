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
  fastify.get("/teste", (request: FastifyRequest, replay: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Ivan",\n  "sexo": "Masculino",\n  "idade": 36,\n  "altura": 1.83,\n  "peso": 100,\n  "objetivo": "Emagrecimento",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da manhã",\n      "alimentos": [\n        "1 fatia de pão integral",\n        "1 ovo cozido",\n        "1 xícara de café com leite desnatado",\n        "1 banana"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da manhã",\n        "alimentos": [\n          "1 iogurte grego natural desnatado",\n          "1/2 xícara de frutas vermelhas"\n        ]\n    },\n    {\n      "horario": "12:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "100g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis cozido",\n        "Salada verde com azeite de oliva"\n      ]\n    },\n    {\n      "horario": "15:00",\n      "nome": "Lanche da tarde",\n        "alimentos": [\n          "1 fatia de pão integral",\n          "1 colher de sopa de pasta de amendoim integral"\n        ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe assado",\n        "1 xícara de batata doce cozida",\n        "Salada de folhas verdes"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche da noite",\n        "alimentos": [\n          "1 copo de leite desnatado com 1 colher de sopa de aveia"\n        ]\n    }\n  ],\n  "suplementos": [\n    "Proteína do soro do leite",\n    "Creatina"\n  ]\n}\n```';

      try {
        let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()

        let jsonObject = JSON.parse(jsonString)

        return replay.send({ data: jsonObject });
      } catch (error) {
        console.error(error)
      }
    replay.send({ ok: true });
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, replay: FastifyReply) => {
      return new CreateNutritionController().handle(request, replay);
    }
  );
}
