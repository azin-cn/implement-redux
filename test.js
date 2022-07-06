function t() {
  console.log(t.arguments)
  console.log(arguments)
  console.log(...arguments)
}

t(1,2,3)