// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express"
import { ZodError } from "zod"
import { Prisma } from "../../generated/prisma" 
import chalk from "chalk"

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  // Logs coloridos no console
  console.log(chalk.red.bold("🚨 Error caught by middleware"))
  console.log(chalk.yellow("➡️ Route:"), chalk.cyan(`${req.method} ${req.originalUrl}`))
  console.log(chalk.yellow("➡️ Time:"), new Date().toLocaleString())
  console.log(chalk.yellow("➡️ Details:"), err.message || err)

  if (process.env.NODE_ENV !== "production") {
    console.error(err.stack) // stack só em dev
  }

  // Erros de validação (Zod)
  if (err instanceof ZodError) {
    const messages = err.issues.map(e => `${e.path.join(".")}: ${e.message}`)
    return res.status(400).json({
      error: "Validation failed",
      message: "Erro de validação nos dados enviados",
      messages, // <-- array direto para o toast
      details: err.issues.map(e => ({
        path: e.path.join("."),
        message: e.message,
      })),
    })
  }


  // Erros conhecidos do Prisma
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res.status(409).json({
        error: "Duplicate value",
        message: `Já existe um registro com este campo único: ${err.meta?.target}`,
      })
    }
    if (err.code === "P2025") {
      return res.status(404).json({
        error: "Record not found",
        message: "O recurso solicitado não foi encontrado",
      })
    }
  }

  // Erro genérico
  return res.status(500).json({
    error: "Internal server error",
    message: err.message || "Erro inesperado no servidor",
  })
}
