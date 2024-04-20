// Definindo uma interface para as permissões de um usuário
interface UserPermissions {
  tasks: string[]; // Permissões relacionadas a tarefas
  reports: string[]; // Permissões relacionadas a relatórios
}

// Definindo uma interface para representar os diferentes papéis de usuário
interface UserRolePermissions {
  admin: UserPermissions; // Permissões para o papel de administrador
  user: UserPermissions; // Permissões para o papel de usuário comum
}

// Definindo um objeto que utiliza as interfaces acima
const permission: UserRolePermissions = {
  admin: {
    tasks: ["create", "read", "update", "delete"],
    reports: ["read"],
  },
  user: {
    tasks: ["create", "read", "update"],
    reports: ["read"],
  },
};

// Exemplo de uso
console.log(permission.admin.tasks); // Saída: ["create", "read", "update", "delete"]
