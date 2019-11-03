const doc = document
let ind
let first = 0
let second = 0
let lines = []
let forCountry = forMoney = forPeople = forI = 0
const input = doc.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
  console.log(input.files)
  const reader = new FileReader()
  reader.onload = function () {
    console.log(reader.result)
    lines = reader.result.split('\n').map(function (line) {
      return line.split(' ')
    })
  }

  reader.readAsText(input.files[0])
}, false)


let arrSort = [];
function GetAllData() {

  for (let i = 0; i < lines.length; i++) {
    let td = doc.createElement("td")
    td.setAttribute("id", "td")
    let table = doc.getElementById("table")
    let tr = doc.createElement("tr")
    tr.setAttribute("class", "tr")
    table.appendChild(tr)
    tr.appendChild(td)
    tr.innerHTML = `
        <td><div class="input-group ">
              <div class="input-group-prepend"></div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                
                value="${lines[i][0]}"
              />
            </div></td>
            <td><div class="input-group ">
              <div class="input-group-prepend"></div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                
                value="${lines[i][1]}"
              />
            </div></td>
            <td><div class="input-group ">
              <div class="input-group-prepend"></div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                
                value="${lines[i][2]}"
              />
            </div></td>`
    console.log(td)
  }
}
function GetOneForm() {
  console.log(forI, "ii")
  console.log(lines, "104")
  let td = doc.createElement("td")
  td.setAttribute("id", "td")
  let table = doc.getElementById("table")
  let tr = doc.createElement("tr")
  tr.setAttribute("class", "tr")
  table.appendChild(tr)
  tr.appendChild(td)
  if (forI == 0) {
    lines.push([, ,])
    console.log(lines, "113")
    tr.innerHTML = `
    <td><div class="input-group ">
          <div class="input-group-prepend"></div>
          <input
            type="text"
            class="form-control Country"
            placeholder="Страна"
            
            onchange="lines[0][0]=this.value"
          />
        </div></td>
        <td><div class="input-group ">
          <div class="input-group-prepend"></div>
          <input
            type="number"
            class="form-control People"
            placeholder="Население"
            
            onchange="lines[0][1]=this.value"
          />
        </div></td>
        <td><div class="input-group ">
          <div class="input-group-prepend"></div>
          <input
            type="number"
            class="form-control Money"
            placeholder="Бюджет"
            
            onchange="lines[0][2]=this.value"
          />
        </div></td>`
    // lines.push([, ,])
  }
  if (forI > 0) {
    tr.innerHTML = `
    <td><div class="input-group ">
          <div class="input-group-prepend"></div>
          <input
            type="text"
            class="form-control Country"
            placeholder="Страна"
            
            onchange="lines[forI-1][0]=(this.value)"
          />
        </div></td>
        <td><div class="input-group ">
          <div class="input-group-prepend"></div>
          <input
            type="number"
            class="form-control People"
            placeholder="Население"
            
            onchange="lines[forI-1][1]=(this.value)"
          />
        </div></td>
        <td><div class="input-group ">
          <div class="input-group-prepend"></div>
          <input
            type="number"
            class="form-control Money"
            placeholder="Бюджет"
            
            onchange="lines[forI-1][2]=(this.value)"
          />
        </div></td>`
  }

  if (forI > 0) {
    lines.push([, ,])
    console.log(lines, "183")
  }
  forI++

  console.log(forI, "iiii")
}


function SortFromFileMerge() {
  if (ind == undefined) {
    alert('Для начала нажмите на поле по которому хотите отсортировать(Название столбцов)')
    return
  }
  if (lines.length == 0 || lines.length == 1)
    return
  if (ind == 1 || ind == 2) {
    for (let i = 0; i < lines.length; i++) {
      lines[i][ind] = parseInt(lines[i][ind], 10)
    }
  }
  let a = []
  for (let i = 0; i < lines.length; i++) {
    console.log(lines[i][ind])
    a[i] = lines[i][ind]
  }


  function mergeSort(arr) {
    if (arr.length < 2)
      return arr;

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
      if (left[0][ind] <= right[0][ind]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length)
      result.push(left.shift());

    while (right.length)
      result.push(right.shift());

    return result;
  }

  lines = mergeSort(lines)
  console.log(mergeSort(lines), "lineslines202");
}

function SortFromFileShake() {
  if (ind == undefined) {
    alert('Для начала нажмите на поле по которому хотите отсортировать(Название столбцов)')
    return
  }
  if (lines.length == 0 || lines.length == 1)
    return

  if (ind == 1 || ind == 2) {
    for (let i = 0; i < lines.length; i++) {
      lines[i][ind] = parseInt(lines[i][ind], 10)
      // console.log(lines[i][ind], "ygy")
    }
  }
  /////////////////

  let left = 0, right = lines.length - 1, temp
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (lines[i][ind] > lines[i + 1][ind]) {
        temp = lines[i]
        lines[i] = lines[i + 1]
        lines[i + 1] = temp
      }
    }
    right--
    for (let i = right; left < i; i--) {
      if (lines[i][ind] < lines[i - 1][ind]) {
        temp = lines[i - 1]
        lines[i - 1] = lines[i]
        lines[i] = temp
      }
    }
    left++
  }
  // console.table(lines, "posle")
  console.log(lines)
}

function Search(fs, ss) {
  if (fs == 0 || ss == 0) {
    alert('Введите начало и конец диапазона')

    return
  }
  A = lines
  console.log(A, 'A')
  let i = 0, j = A.length - 1, k;

  while (i < j) {
    console.log('Zashol')
    k = Math.floor((i + j) / 2);
    if (A[k][ind] >= fs && A[k][ind] <= ss) {
      console.log(k, "RETURN")
      return i
    }
    else if (A[k][ind] > ss) {
      j = k
    }
    else if (A[k][ind] < fs) {
      i = k + 1
    }

  }

}
