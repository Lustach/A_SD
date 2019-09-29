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

function SortFromFile() {
  let array = []
  for (let i = 0; i < lines.length; i++) {
    array[i] = parseInt(lines[i][1], 10) //+lines[i][1], 10
  }
  // let array = []
  // array = array
  // console.log(array, "DO")
  // console.log(array)
  let n = lines.length
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
    // console.log(c, "c1")
    // console.log(array, "a1")
    // Переносим упорядоченную последовательность (промежуточный вариант) в исходный массив
    for (i = 0; i < n; i++)
      array[i] = c[i];
  }
  console.log(array, "Posle")
  for (let i = 0; i < array.length; i++) {
    console.log(lines[i][1], "1")
    lines[i][1] = array[i]
    console.log(lines[i][1])
  }
  return array
}
