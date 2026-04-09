import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import path from "node:path";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API CertSys ACL com Swagger",
      version: "1.0.0",
      description: "Documentação da API da CertSys com autenticação, permissões e ACL",
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Servidor local",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      }
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    path.resolve(__dirname, "../routes/**/*.ts"),
    path.resolve(__dirname, "../swagger/*.ts"),
  ], // pega todas as rotas modularizadas
};

const swaggerSpec = swaggerJSDoc(options);


export function swaggerDocs(app: Express, port: number) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log(`📖 Swagger disponível em: http://localhost:${port}/api-docs`);
}
