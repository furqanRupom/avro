import { Role } from "../../features/auth/role.model"

export interface User {
  id: string // id
  name:string
  role: Role
  email: string
  phone: string
  isActive: boolean
  address: Address

}
interface Address {
  area: string
  district: string
  division: string
  postalCode: number
  street:string
}
export interface UserResponse {
  statusCode: number
  success:boolean
  message: string
  data: User
}
