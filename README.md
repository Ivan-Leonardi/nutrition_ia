<h1 align="center" style="font-weight: bold;">API Nutrition IA💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> •
 <a href="#started">Iniciar o projeto</a> •
  <a href="#routes">Endpoints da API</a>
</p>

<p align="center">
    <b>App gerador de dietas nutricionais com IA do Google Gemini</b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- NodeJS
- Fastify
- Google Generative AI  

<h2 id="started">🚀 Iniciar o projeto</h2>

<h3>Requisitos</h3>

- NodeJS v-v20.16.0

<h3>Clonar o projeto</h3>

```bash
git clone https://github.com/Ivan-Leonardi/nutrition_ia.git
```

<h3>Config .env variáveis de ambiente</h2>

Substitua o arquivo `.env.example` pela suas credenciais no aquivo `.env`.

```yaml
API_KEY=sua_chave_API_do_google_gemini
```

<h3>Start</h3>

Para rodar o projeto

```bash
cd nutrition_ia
npm install
npm run dev
```

<h2 id="routes">📍 Endpoint da API</h2>

Principais rotas
​
| rota              | descrição                                         
|----------------------|-----------------------------------------------------
| <kbd>POST /create</kbd>  | enviar dados do cliente que deseja a dieta nutricional



<h3>POST /create</h3>

**REQUEST**
```json
{
  "name": "Ivan",
  "age": "36"
  "gender": "masculino"
  "height": "1,83"
  "level": "atividade física 2 vezes por semana"
  "objective": "Emagrecer"
  "weight": "100kg"
}
```



**RESPONSE**
```json
{
 {
  "data": {
    "nome": "Ivan",
    "sexo": "masculino",
    "idade": 36,
    "altura": 1.83,
    "peso": 100,
    "objetivo": "emagrecer",
    "refeicoes": [
      {
        "horario": "08:00",
        "nome": "Café da Manhã",
        "alimentos": [
          "1 fatia de pão integral",
          "1 ovo cozido",
          "1 banana",
          "1 xícara de café com leite desnatado"
        ]
      },
      {
        "horario": "10:30",
        "nome": "Lanche da Manhã",
        "alimentos": [
          "1 iogurte grego natural desnatado",
          "1 colher de sopa de granola"
        ]
      },
      {
        "horario": "13:00",
        "nome": "Almoço",
        "alimentos": [
          "100g de frango grelhado",
          "1 xícara de arroz integral",
          "1 xícara de brócolis cozido",
          "Salada de folhas verdes com azeite de oliva e vinagre"
        ]
      },
      {
        "horario": "15:30",
        "nome": "Lanche da Tarde",
        "alimentos": [
          "1 maçã",
          "1 punhado de castanhas"
        ]
      },
      {
        "horario": "19:00",
        "nome": "Jantar",
        "alimentos": [
          "150g de peixe grelhado",
          "1 batata doce média",
          "1 xícara de couve refogada"
        ]
      },
      {
        "horario": "21:00",
        "nome": "Ceia",
        "alimentos": [
          "1 iogurte natural desnatado"
        ]
      }
    ],
    "suplementos": [
      "Proteína do soro do leite",
      "Creatina"
    ]
  }
}
```

