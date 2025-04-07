document.getElementById('formAgendamento')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Agendamento realizado com sucesso!");
    window.location.href = "comprovante.html";
  });
  