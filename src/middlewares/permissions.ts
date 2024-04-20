// Definindo os tipos
type Permissions = {
  [resource: string]: string[]; // Recurso: Lista de ações permitidas
};

type UserRole = "admin" | "user"; // Tipos de função do usuário

enum UserRoleEnum {
  Admin = "admin",
  User = "user",
  Client = "client",
}

// Definindo as permissões para cada função de usuário
const permissions: { [key in UserRole]: Permissions } = {
  admin: {
    tasks: ["create", "read", "update", "delete"],
    reports: ["read"],
  },
  user: {
    tasks: ["create", "read", "update"],
    reports: ["read"],
  },
};

// Função para verificar as permissões
function checkPermission(
  userRole: UserRole,
  resource: string,
  action: string
): boolean {
  const rolePermissions = permissions[userRole];
  if (!rolePermissions || !rolePermissions[resource]) {
    return false;
  }
  return rolePermissions[resource].includes(action);
}

// Exemplo de uso
const isAdmin = checkPermission("admin", "tasks", "delete");
console.log("Admin has permission to delete tasks:", isAdmin); // true

const isUser = checkPermission("user", "tasks", "delete");
console.log("User has permission to delete tasks:", isUser); // false

enum OwnerRole {
  user = "user",
  client = "client",
}

function checkPermissions() {}
