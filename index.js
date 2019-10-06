const doc = document
let lines = []
const input = doc.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
  console.log(input.files)
  const reader = new FileReader()
  reader.onload = function () {
    console.log(reader.result)
    lines = reader.result.split('\n').map(function (line) {
      return line.split(' ')
    })
    console.log(lines[0][1])
  }

  reader.readAsText(input.files[0])
}, false)

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
            class="form-control Country"
            placeholder="Страна"
            
            
          />
        </div></td>
        <td><div class="input-group ">
          <div class="input-group-prepend"></div>
          <input
            type="number"
            class="form-control People"
            placeholder="Население"
            
            
          />
        </div></td>
        <td><div class="input-group ">
          <div class="input-group-prepend"></div>
          <input
            type="number"
            class="form-control Money"
            placeholder="Бюджет"
            
            
          />
        </div></td>`
}

// function SortFromFile() {
//   console.log(lines, "Lines")
//   let array = []
//   for (let i = 0; i < lines.length; i++) {
//     array[i] = parseInt(lines[i][1], 10) //+lines[i][1], 10
//   }
//   // let array = []
//   // array = array
//   // console.log(array, "DO")
//   // console.log(array)
//   let n = lines.length
//   let mid = n / 2; // находим середину сортируемой последовательности
//   if (n % 2 == 1)
//     mid++;
//   let h = 1; // шаг
//   // выделяем память под формируемую последовательность
//   let c = []
//   let step;
//   while (h < n) {
//     step = h;
//     let i = 0;   // индекс первого пути
//     let j = mid; // индекс второго пути
//     let k = 0;   // индекс элемента в результирующей последовательности
//     while (step <= mid) {
//       while ((i < step) && (j < n) && (j < (mid + step))) { // пока не дошли до конца пути
//         // заполняем следующий элемент формируемой последовательности
//         // меньшим из двух просматриваемых
//         if (array[i] < array[j]) {
//           c[k] = array[i];
//           i++; k++;
//         }
//         else {
//           // console.log(c, "ccc")
//           c[k] = array[j];
//           j++; k++;
//         }
//         // console.log(array, "array")
//       }

//       while (i < step) { // переписываем оставшиеся элементы первого пути (если второй кончился раньше)
//         c[k] = array[i];
//         i++; k++;
//         // console.log(c, "c")
//       }
//       while ((j < (mid + step)) && (j < n)) {  // переписываем оставшиеся элементы второго пути (если первый кончился раньше)
//         c[k] = array[j];
//         j++; k++;
//       }
//       step = step + h; // переходим к следующему этапу
//     }
//     h = h * 2;
//     // console.log(c, "c1")
//     // console.log(array, "a1")
//     // Переносим упорядоченную последовательность (промежуточный вариант) в исходный массив
//     for (i = 0; i < n; i++)
//       array[i] = c[i];
//   }
//   console.log(array, "Posle")
//   for (let i = 0; i < array.length; i++) {
//     console.log(lines[i][1], "1")
//     lines[i][1] = array[i]
//     console.log(lines[i][1])
//   }
//   return array
// }

function SortFromFileMerge() {
  // console.log(lines, "Lines")
  let arraykines
  arraykines = []
  // console.log(arraykines, "HOBA")
  for (let i = 0; i < lines.length; i++) {

    //+lines[i][1], 10
    // console.log(lines[i], "Here")
    // array[i] = parseInt(lines[i], 10)
    arraykines.push([, ,])
    for (let j = 0; j <= 2; j++) {
      // console.log(array[i][j], "array[i]j")
      // console.log(lines[i][j], "lines[i]j")
      if (j == 0) {
        // console.log(arraykines, "OPA")
        arraykines[i][j] = lines[i][j]
      }
      if (j == 1 || j == 2) {
        arraykines[i][j] = parseInt(lines[i][j], 10)
        // console.log(arraykines[i][j], "ij")
        // console.log(arraykines[i], "ONLY")
      }
    }
  }

  let array = []
  for (let i = 0; i < lines.length; i++) {
    array[i] = parseInt(lines[i][1], 10)

  }

  // console.log(array, "arrayhere!")
  // array = array
  // console.log(array, "DO")
  // console.log(array)
  let n = array.length
  let mid = n / 2; // находим середину сортируемой последовательности
  if (n % 2 == 1)
    mid++;
  let h = 1; // шаг
  // выделяем память под формируемую последовательность
  let c = []
  let step;
  while (h < n) {
    step = h;
    let i = 0;   // индекс первого пути
    let j = mid; // индекс второго пути
    let k = 0;   // индекс элемента в результирующей последовательности
    while (step <= mid) {
      while ((i < step) && (j < n) && (j < (mid + step))) { // пока не дошли до конца пути
        // заполняем следующий элемент формируемой последовательности
        // меньшим из двух просматриваемых
        if (array[i] < array[j]) {
          c[k] = array[i];
          i++; k++;
        }
        else {
          // console.log(c, "ccc")
          c[k] = array[j];
          j++; k++;
        }
        // console.log(array, "array")
      }

      while (i < step) { // переписываем оставшиеся элементы первого пути (если второй кончился раньше)
        c[k] = array[i];
        i++; k++;
        // console.log(c, "c")
      }
      while ((j < (mid + step)) && (j < n)) {  // переписываем оставшиеся элементы второго пути (если первый кончился раньше)
        c[k] = array[j];
        j++; k++;
      }
      step = step + h; // переходим к следующему этапу
    }
    h = h * 2;

    // console.log(array, "a1")
    // Переносим упорядоченную последовательность (промежуточный вариант) в исходный массив

    for (i = 0; i < n; i++)
      array[i] = c[i];

    for (i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines.length; j++)
        if (array[i][1] == c[i])
          zapomniIndex = i
      if (array[i][1] > c[i]) {

      }

    }
    console.log(c, "c")
    console.log(array, "array")
  }

  // array.sort(function (a, b) {

  // })

  console.log(array, "here")

  // let forArray = 0
  // let forC = 0
  // let Array2 = []
  // for (let i = 0; i < arraykines.length; i++) {
  //   if (arraykines[i][1] == c[i]) {
  //     forC = i
  //     continue
  //   }
  //   if (arraykines[i][1] > c[i] || arraykines[i][1] < c[i]) {
  //     for (let j = 0; j < arraykines.length; j++) {
  //       if (arraykines[j][1] == c[i]) {
  //         forArray = j
  //         Array2 = arraykines[i]
  //         arraykines[i] = arraykines[forArray]
  //         arraykines[forArray] = Array2
  //         break
  //       }
  //     }
  //   }
  // }


  // console.log(arraykines, "&&&")



  lines = arraykines
  // console.log(arraykines, "after")
  // console.log(arraykines, "arrayAfterSort")

  // console.log(lines, "Lines")
  // lines = arraykines
  // console.log(lines, "Lines+")
  // for (let i = 0; i < arraykines.length; i++) {
  //   // console.log(lines[i][1], "1")
  //   lines[i][1] = arraykines[i]
  //   // console.log(lines[i][1])
  // }
  return array
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