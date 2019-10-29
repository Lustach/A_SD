const doc = document
let ind
let first
let second
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
    // console.log(lines[0][1], "lines[0][1]")
    // console.log(lines, "lines")
  }

  reader.readAsText(input.files[0])
}, false)

// if (lines) {
//   for (let i = 0; i < lines.length; i++) {
//     lines[i][ind] = parseInt(lines[i][1], 10)
//     console.log(lines[i][ind], "ygy")
//     lines[i][ind] = parseInt(lines[i][2], 10)
//     console.log(lines[i][ind], "ygy")
//   }
// }
let arrSort = [];

// let arraykines = []
// for (let i = 0; i < lines.length; i++) {
//   arraykines.push([, ,])
//   for (let j = 0; j <= 2; j++) {
//     if (j == 0) {
//       arraykines[i][j] = lines[i][j]
//     }
//     if (j == 1 || j == 2) {
//       arraykines[i][j] = parseInt(lines[i][j], 10)
//     }
//   }
// }

function GetAllData() {

  // let td = doc.createElement("td")
  // td.setAttribute("id", "td")
  // let tr = doc.getElementById("content")
  // tr.appendChild(td)
  // td.innerHTML = `<td> ${lines[0][1]}</td>`
  // console.log(td)
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
  // console.log(lines)
  // if (forI > 0) { forI++ }
  // else {
  //   lines.push([, ,])
  // }
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

let swap = 0
let if_ = 0
function SortFromFileMerge() {

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
        if_++
        swap++
        result.push(left.shift());
      } else {
        if_++
        result.push(right.shift());
        swap++
      }
    }
    console.log(if_, "if_")
    while (left.length)
      result.push(left.shift());

    while (right.length)
      result.push(right.shift());

    return result;
  }

  lines = mergeSort(lines)
  console.log(mergeSort(lines), "lineslines");
  console.log(if_, "if_240")
  console.log(swap, "swap")
}

function sortbyCountry() {
  lines.sort(sortFunction)
  function sortFunction(a, b) {
    if (a[0] === b[0]) {
      return 0;
    }
    else {
      return (a[0] < b[0]) ? -1 : 1;
    }
  }
  console.log(lines)
}

function sortbyPeople() {
  lines.sort(function (a, b) {
    return a[1] - b[1]
  })
  console.log(lines)
}

function sortbyMoney() {
  lines.sort(function (a, b) {
    return a[2] - b[2]
  })
}

function SortFromFileShake() {

  if (lines.length == 0 || lines.length == 1)
    return

  if (ind == 1 || ind == 2) {
    for (let i = 0; i < lines.length; i++) {
      lines[i][ind] = parseInt(lines[i][ind], 10)
      console.log(lines[i][ind], "ygy")
    }
  }
  /////////////////

  let swap = 0
  let if_ = 0

  let left = 0, right = lines.length - 1, temp
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (lines[i][ind] > lines[i + 1][ind]) {
        temp = lines[i]
        lines[i] = lines[i + 1]
        lines[i + 1] = temp
        swap++
      }
      if_++
    }
    right--
    for (let i = right; left < i; i--) {
      if (lines[i][ind] < lines[i - 1][ind]) {
        temp = lines[i - 1]
        lines[i - 1] = lines[i]
        lines[i] = temp
        swap++
      }
      if_++
    }
    left++
  }
  console.table(lines, "posle")
  console.log(if_, "if_")
  console.log(swap, "swap")
  console.log(lines)
}

function Search(fs, ss)       // t - искомый элемент,
{
  fs = first
  ss = second
  let resultat
  A = lines
  console.log(A.length)        // A - упорядоченный массив, в котором ищем.
  var leftBoard = 0, rightBoard = A.length - 1, k, forA;
  while (leftBoard < rightBoard) {
    k = Math.floor((leftBoard + rightBoard) / 2);
    if (fs >= A[k][ind] && ss <= A[k][ind]) return resultat = A[k][ind];
    if (fs >= A[k][ind]) leftBoard = k + 1;
    if (ss <= A[k][ind]) rightBoard = k - 1;
  }

  if ((A[leftBoard][ind] >= fs || A[leftBoard][ind] <= ss) && leftBoard == rightBoard) return i;    // На выходе индекс искомого элемента.
  else return -1;                 // Если искомого элемента нет в массиве, то -1.
}

// if (lines.length > 0)
//   console.log(Search(1, lines))