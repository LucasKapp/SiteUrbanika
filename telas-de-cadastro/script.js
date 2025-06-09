document.getElementById('cpfCnpj').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

  if (value.length <= 11) {
      // Formata como CPF (###.###.###-##)
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else {
      // Formata como CNPJ (##.###.###/####-##)
      value = value.replace(/(\d{2})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1/$2');
      value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }

  e.target.value = value; // Atualiza o campo com a formatação
});