async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (data.success) {
    msg.style.color = "green";
    msg.textContent = "Inicio de sesión exitoso. Bienvenido " + data.user;
    setTimeout(() => (window.location.href = "index.html"), 1500);
  } else {
    msg.style.color = "red";
    msg.textContent = data.error || "Error al iniciar sesión";
  }
}
