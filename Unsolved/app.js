data =[1, 2, 43, 6, 5, 886, 3, 2]
students = [
    {
        name: "Mike",
        grade: 97
    },
    {
        name: "Doug",
        "grade": 87
    },
    {
        name: "Umair",
        "grade": 90
    },
    {
        name: "Ed",
        "grade": 80
    },
]

y = d3.scaleLinear()
    .domain([0, d3.max(students.map(d => d.grade))])
    .range([300, 0])

    console.log(y(97))

x = d3.scaleBand()
    .domain(students.map(d => d.name))
    .range([0, 600])
    .padding([0.1])

    console.log(x("Mike"))
    console.log(x("Doug"))
    console.log(x("Umair"))
    console.log(x("Ed"))

    console.log(x.bandwidth())

    color = d3.scaleLinear()
        .domain([0, d3.max(students.map(d => d.grade))])
        .range(["green", "red"])


f = d3.scaleLinear()
    .domain([0, 10])
    .range([0, 600])

console.log(f(0))
console.log(f(4))
console.log(f(5))
console.log(f(10))

g = d3.scaleLinear()
    .domain([0, 10])
    .range([0, 800])

console.log(g(0))
console.log(g(4))
console.log(g(5))
console.log(g(10))
       
h = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 600])

console.log(h(0))
console.log(h(886))
console.log(h(342))

// i = d3.scaleLinear()
//     .domain([d3.min(data), d3.max(data)])
//     .range([20, 100])

i = d3.scaleLinear()
    .domain(extent(data))
    .range([20, 100])

console.log(i(1))
console.log(i(886))
console.log(i(43))

j = d3.scaleLinear()
    .domain([0, 100])
    .range([300, 0])