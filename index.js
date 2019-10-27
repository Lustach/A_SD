const doc = document
let ind
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
    console.log(lines[0][1], "lines[0][1]")
    console.log(lines, "lines")
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

let arraykines = []
for (let i = 0; i < lines.length; i++) {
  arraykines.push([, ,])
  for (let j = 0; j <= 2; j++) {
    if (j == 0) {
      arraykines[i][j] = lines[i][j]
    }
    if (j == 1 || j == 2) {
      arraykines[i][j] = parseInt(lines[i][j], 10)
    }
  }
}


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


function SortFromFileMerge() {
  // let n = array.length
  // let mid = n / 2; // находим середину сортируемой последовательности
  // if (n % 2 == 1)
  //   mid++;
  // let h = 1; // шаг
  // // выделяем память под формируемую последовательность
  // let c = []
  // let step;
  // while (h < n) {
  //   step = h;
  //   let i = 0;   // индекс первого пути
  //   let j = mid; // индекс второго пути
  //   let k = 0;   // индекс элемента в результирующей последовательности
  //   while (step <= mid) {
  //     while ((i < step) && (j < n) && (j < (mid + step))) { // пока не дошли до конца пути
  //       // заполняем следующий элемент формируемой последовательности
  //       // меньшим из двух просматриваемых
  //       if (array[i] < array[j]) {
  //         c[k] = array[i];
  //         i++; k++;
  //       }
  //       else {
  //         c[k] = array[j];
  //         j++; k++;
  //       }
  //     }
  //     while (i < step) { // переписываем оставшиеся элементы первого пути (если второй кончился раньше)
  //       c[k] = array[i];
  //       i++; k++;
  //     }
  //     while ((j < (mid + step)) && (j < n)) {  // переписываем оставшиеся элементы второго пути (если первый кончился раньше)
  //       c[k] = array[j];
  //       j++; k++;
  //     }
  //     step = step + h; // переходим к следующему этапу
  //   }
  //   h = h * 2;
  //   // Переносим упорядоченную последовательность (промежуточный вариант) в исходный массив
  //   for (i = 0; i < n; i++)
  //     array[i] = c[i];
  //   for (i = 0; i < lines.length; i++) {
  //     for (let j = 0; j < lines.length; j++)
  //       if (array[i][1] == c[i])
  //         zapomniIndex = i
  //     if (array[i][1] > c[i]) {
  //     }
  //   }
  //   // console.log(c, "c")
  //   // console.log(array, "array")
  // }
  // console.log(array, "here")
  // lines = arraykines
  // return array

  if (ind == 1 || ind == 2) {
    for (let i = 0; i < lines.length; i++) {
      lines[i][ind] = parseInt(lines[i][ind], 10)
      console.log(lines[i][ind], "ygy")
    }
  }
  let arr = [1, 125, 12, 4241, 123, 123, 1245, 5, 15, 6, 3, 2, 1, 3, 55, 0]
  // mergeSort(arr)
  // console.log(arrSort)
  var a = [34, 203, 3, 746, 200, 984, 198, 764, 9, 9];

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
      if (left[0] <= right[0]) {
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

  console.log(mergeSort(a));

}

// const mergeSort = arr => {

//   console.log(arr, "arrishere")
//   // Проверяем корректность переданных данных
//   if (!arr || !arr.length) {
//     return null;
//   }
//   //Если массив содержит один элемент просто возвращаем его
//   if (arr.length <= 1) {
//     return arr;
//   }
//   // Находим середину массива и делим его на два
//   const middle = Math.floor(arr.length / 2);
//   const arrLeft = arr.slice(0, middle);
//   const arrRight = arr.slice(middle);
//   // Для новых массивов снова вызываем сортировку,
//   // сливаем их и возвращаем снова единый массив
//   return merge(mergeSort(arrLeft), mergeSort(arrRight));;
// };

// const merge = (arrFirst, arrSecond) => {

//   let i = j = 0;
//   // сравниваем два массива, поочередно сдвигая указатели
//   while (i < arrFirst.length && j < arrSecond.length) {
//     arrSort.push(
//       (arrFirst[i] < arrSecond[j]) ?
//         arrFirst[i++] : arrSecond[j++]
//     );
//   }
//   // обрабатываем последний элемент при разной длине массивов
//   // и возвращаем один отсортированный массив
//   console.log(arrFirst, "arrfirst")
//   console.log(arrSecond, "sec")
//   return [
//     ...arrSort,
//     ...arrFirst.slice(i),
//     ...arrSecond.slice(j)
//   ];
// };

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

  // let array = []
  // for (let i = 0; i < lines.length; i++) {
  //   array[i] = parseInt(lines[i][1], 10)
  //   console.log("here")
  // }
  // let left = firstSwap = 0;
  // let right = lastSwap = array.length;
  // console.log("here1")
  // while (left < right) {
  //   console.log("here2")
  //   for (let i = left; i < right; i++) {
  //     console.log("here3")
  //     if (array[i] > array[i + 1]) {
  //       console.log("here4")
  //       // [array[i], array[i + 1]] = [array[i + 1], array[i]]
  //       array[i] = array[i + 1]
  //       array[i + 1] = array[i]
  //       lastSwap = i;
  //     }
  //   }
  //   console.log("here5")
  //   right = lastSwap;
  //   for (let i = right; i > left; i--) {
  //     console.log("here6")
  //     if (array[i] < array[i - 1]) {
  //       [array[i], array[i - 1]] = [array[i - 1], array[i]]
  //       firstSwap = i;
  //     }
  //   }
  //   left = firstSwap;
  // }
  // return array;

  // let array1 = [
  //   ['erevan', 'jopa'],
  //   [0, 1]
  // ]
  // console.log(array1[1][1])
  indI = ind
  if (lines.length == 0 || lines.length == 1)
    return

  if (ind == 1 || ind == 2) {
    for (let i = 0; i < lines.length; i++) {
      lines[i][ind] = parseInt(lines[i][ind], 10)
      console.log(lines[i][ind], "ygy")
    }
  }

  let left = 0, right = lines.length - 1, temp
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (lines[i][indI] > lines[i + 1][indI]) {
        temp = lines[i]
        lines[i] = lines[i + 1]
        lines[i + 1] = temp
      }
    }
    right--
    for (let i = right; left < i; i--) {
      if (lines[i][indI] < lines[i - 1][indI]) {
        temp = lines[i - 1]
        lines[i - 1] = lines[i]
        lines[i] = temp
      }
    }
    left++
  }
  console.log(lines)
}