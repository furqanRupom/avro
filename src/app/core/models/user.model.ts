import { Role } from "../../features/auth/role.model"

export interface User {
  sub: string // id
  role: Role
  email:string
}
