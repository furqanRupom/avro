import { Role } from "../../features/auth/role.model"

export interface User {
  id: string // id
  name:string
  role: Role
  email:string
}
