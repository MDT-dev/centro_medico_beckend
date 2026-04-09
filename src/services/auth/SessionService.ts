import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import authConfig from "../../config/auth"
import { prisma } from "../../lib/prisma"

type UserRequest = {
  email: string
  password: string
}

export class SessionService {
  async execute({ email, password }: UserRequest) {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      throw new Error("User does not exist!")
    }

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new Error("User or password incorrect")
    }

    const token = sign(
      {
        role: user.role
      },
      authConfig.jwt.secret,
      {
        subject: user.id, // 👈 padrão correto
        expiresIn: authConfig.jwt.expiresIn,
      }
    )

    return {
      token,
      user: {
        id: user.id,
        username: user.email,
        role: user.role,
      },
    }
  }
}
