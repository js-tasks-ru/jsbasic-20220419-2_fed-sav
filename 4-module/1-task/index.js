function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (let person of friends) {
    let li = document.createElement('li');
    ul.append(li);
    li.textContent = `${person.firstName} ${person.lastName}`
  }
    
  return ul
}