const positions = getPositions()
console.log(positions)

const wrapper = document.querySelector('#wrapper')

for (let k in positions) {
  positions[k].checked = false
  let li = document.createElement('li')
  let h2 = document.createElement('h2')
  let ckbx = document.createElement('input')
  let p = document.createElement('p')
  ckbx.type = 'checkbox'
  ckbx.id = `ck-${k}`
  h2.textContent = positions[k].name
  p.textContent = positions[k].category
  li.appendChild(h2)
  // li.appendChild(p)
  li.appendChild(ckbx)
  wrapper.appendChild(li)
}

const checks = document.querySelectorAll('input[type="checkbox"]')

for (let i = 0; i < checks.length; i++) {
  checks[i].onclick = function (e) {
    localStorage.setItem(`position_${i}`, !!e.checked)
  }
}