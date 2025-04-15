document.getElementById('nao').addEventListener('click', function () {
    alert('Resposta errada! Tente de novo 😜');
  });

  document.getElementById('sim').addEventListener('click', function () {
    document.getElementById('coraçaoContainer').style.display = 'flex';
  });