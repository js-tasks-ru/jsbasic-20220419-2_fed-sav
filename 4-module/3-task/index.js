function highlight(table) {

  let tbody = table.children[1]

  for (let i = 0; i < tbody.rows.length; i++) {

    //available / unavailable
    if (tbody.rows[i].children[3].getAttribute('data-available') == 'true') {
      tbody.rows[i].classList.add('available');
    } if (tbody.rows[i].children[3].getAttribute('data-available') == 'false') {
      tbody.rows[i].classList.add('unavailable');
    }

    //hidden
    if (tbody.rows[i].children[3].hasAttribute('data-available') == false) {
      tbody.rows[i].hidden = true;
    } else tbody.rows[i].hidden = null;
    

    // male
    if (tbody.rows[i].children[2].textContent == 'm') {
      tbody.rows[i].classList.add('male');
    } if (tbody.rows[i].children[2].textContent == 'f') {
      tbody.rows[i].classList.add('female');
    }

    //inline
    if (tbody.rows[i].children[1].textContent < 18) {
      tbody.rows[i].style="text-decoration: line-through"
    }
  }
}
