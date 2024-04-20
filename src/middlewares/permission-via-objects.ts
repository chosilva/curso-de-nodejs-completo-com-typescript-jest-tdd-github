// Definindo o tipo UserRole
type UserRole2 = "admin" | "user" | "qualquerOutroDonoDePermissao";

// Definindo o tipo Permissions
type Permissions2 = string[];

// Criando um objeto de exemplo com permissões
// const permissions2: { [key in UserRole2]: Permissions2 } = {
//   admin: ["create", "read", "update", "delete"],
//   user: ["create", "read", "update"],
// };

const perm: { [key in UserRole2]: Permissions2 } = {
  admin: ["create", "update", "delete", "disable", "get", "getAll"],
  user: ["create", "updateOne"],
  qualquerOutroDonoDePermissao: [],
};
console.log(perm);
