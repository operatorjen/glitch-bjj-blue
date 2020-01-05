const positions = getPositions()
console.log(positions)

const wrapper = document.querySelector('#wrapper')
let output = []

for (let k in positions) {
  positions[k].checked = false
  let li = document.createElement('li')
  let h2 = document.createElement('h2')
  let ckbx = document.createElement('input')
  let text = document.createElement('textarea')
  // let p = document.createElement('p')
  ckbx.type = 'checkbox'
  ckbx.id = `ck-${k}`
  let meta = localStorage.getItem(`position_${k}`) || ''
  text.value = meta
  output.push({
    position: meta,
    
  })
  
  text.onblur = function (e) {
    meta = e.target.value.trim()
    localStorage.setItem(`position_${k}`, meta)
  }

  ckbx.onclick = function (e) {
    const checked = e.target.checked || false
    
    if (checked) {
      localStorage.setItem(`position_${k}`, meta)
      ckbx.checked = 'checked'
      ckbx.className = 'on'
      li.className = 'on'
    } else {
      localStorage.removeItem(`position_${k}`)
      ckbx.checked = ''
      ckbx.className = ''
      li.className = ''
    }
  }
  
  if (!!localStorage.getItem(`position_${k}`)) {
    ckbx.checked = 'checked'
    ckbx.className = 'on'
    li.className = 'on'
  }
  h2.textContent = positions[k].name
  // p.textContent = positions[k].category
  li.appendChild(ckbx)
  li.appendChild(h2)
  li.appendChild(text)
  // li.appendChild(p)
  wrapper.appendChild(li)
}

const checks = document.querySelectorAll('input[type="checkbox"]')
