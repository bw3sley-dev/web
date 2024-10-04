export const formatter = {
  // Formata o campo de CPF no formato 999.999.999-99
  cpf(value: string): string {
    return value
      .replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após os primeiros 3 dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após os próximos 3 dígitos
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Adiciona traço antes dos últimos 2 dígitos
      .slice(0, 14) // Limita a 14 caracteres no total (incluindo pontos e traço)
  },

  // Formata o campo de RG no formato 99.999.999-99
  rg(value: string): string {
    return value
      .replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
      .replace(/(\d{2})(\d)/, '$1.$2') // Adiciona ponto após os primeiros 2 dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após os próximos 3 dígitos
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Adiciona traço antes dos últimos 2 dígitos
      .slice(0, 12) // Limita a 12 caracteres no total (incluindo pontos e traço)
  },

  // Formata o campo de telefone no formato (99) 99999-9999
  phone(value: string): string {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2') // Coloca os parênteses e espaço após o DDD
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca o traço após o quinto dígito
      .slice(0, 15) // Limita a 15 caracteres no total
  },

  // Formata o campo de CEP no formato 99999-999
  zipcode(value: string): string {
    return value
      .replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
      .replace(/(\d{5})(\d{1,3})$/, '$1-$2') // Adiciona traço após os primeiros 5 dígitos
      .slice(0, 9) // Limita a 9 caracteres no total (incluindo o traço)
  },
}
