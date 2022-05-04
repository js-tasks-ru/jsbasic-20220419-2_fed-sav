function showSalary(users, age) {
  let filtered = users.filter(item => item.age <= age);

  let nameAndBalance = [];
  
  filtered.forEach( (item) => nameAndBalance.push(`${item.name}, ${item.balance}`))
  return nameAndBalance.join('\n')
}