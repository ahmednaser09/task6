document.getElementById("register-form").addEventListener("submit", (event) => {
    function formatDate() {
        const date = new Date();
        const year = date.getFullYear().toString().slice(-2); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    event.preventDefault();
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("confirmPasswordError").innerHTML = "";

  const username = document.getElementById('username');
  if(username.value.trim() == "")
  {
    document.getElementById("usernameError").innerHTML =formatDate() + "required";
  }

  const password = document.getElementById("password");
if (password.value.trim() == "")
{
  document.getElementById("passwordError").innerHTML=formatDate() + "required";
}

const confirmPassword= document.getElementById("confirmPassword");
if (confirmPassword.value.trim( ) == "")
{
  document.getElementById("confirmPasswordError").innerHTML=formatDate() + "required";

    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        document.getElementById("confirmPasswordError").textContent = "not match" ;
        isValid = false;
    }

    
});

