const authenticationUser = async function (email, password) {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      withCredentials: true,
      data: {
        email,
        password,
      },
    });
    console.log(response);
    if (response.data.status === 'success') {
      alert('Login successfully');
      window.setTimeout(() => {
        location.assign('http://localhost:4000/admin');
      }, 1000);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Check if user enter the valid email
document.getElementById('txtUsername').addEventListener('focusout', (event) => {
  event.preventDefault();
  const email = document.getElementById('txtUsername').value;
  if (email === '' || !validateEmail(email)) {
    document.getElementById('txtUsername').style.borderColor = 'red';
    document.getElementById('txtUsername').style.borderWidth = '2px';
    document.getElementById('txtUsername').style.borderStyle = 'solid';
    document.getElementById('txtUsername').style.borderRadius = '5px';
    document.getElementById('txtUsername').style.outline = 'none';
    document.getElementById('txtUsername').style.boxShadow = 'none';
    document.getElementById('txtUsername').placeholder = 'Nhập email hợp lệ';
  } else {
    document.getElementById('txtUsername').style.borderColor = 'green';
    document.getElementById('txtUsername').style.borderWidth = '2px';
    document.getElementById('txtUsername').style.borderStyle = 'solid';
    document.getElementById('txtUsername').style.borderRadius = '5px';
    document.getElementById('txtUsername').style.outline = 'none';
    document.getElementById('txtUsername').style.boxShadow = 'none';
  }
});

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Login form submitted');
  const email = document.getElementById('txtUsername').value;
  const password = document.getElementById('txtPassword').value;
  authenticationUser(email, password);
});
