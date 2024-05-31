let api = "http://127.0.0.1:8000"

function createInvoice(userId, amount,currency) {
    console.log(userId, amount, currency);
    return "да не"
}

function getMe(userId) {
    return fetch(api + "/me", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ "uid": userId, "balance": 0 })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      throw new Error(error);
    });
  }
  

export {getMe, createInvoice}