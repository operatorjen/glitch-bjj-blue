const positions = getPositions()
console.log(positions)

const wrapper = document.querySelector('#wrapper')

for (let k in positions) {
  positions[k].checked = false
  let li = document.createElement('li')
  let h2 = document.createElement('h2')
  let ckbx = document.createElement('input')
  // let p = document.createElement('p')
  ckbx.type = 'checkbox'
  ckbx.id = `ck-${k}`
  h2.textContent = positions[k].name
  // p.textContent = positions[k].category
  li.appendChild(ckbx)
  li.appendChild(h2)
  // li.appendChild(p)
  wrapper.appendChild(li)
}

const checks = document.querySelectorAll('input[type="checkbox"]')

for (let i = 0; i < checks.length; i++) {
  checks[i].onclick = function (e) {
    const checked = e.target.checked || false
    
    if (checked) {
      localStorage.setItem(`position_${i}`, true)
    } else {
      localStorage.removeItem(`position_${i}`)
    }
  }
  
  if (!!localStorage.getItem(`position_${i}`)) {
    checks[i].checked = 'checked'
  }
}