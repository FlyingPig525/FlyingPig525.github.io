const text = document.getElementById('json')

text.innerHTML = `${JSON.parse('./data.json')}`