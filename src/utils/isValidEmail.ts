export function isValidEmail(email: string): boolean {
  // Expressão regular para validar o formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
