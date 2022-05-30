/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  constructor(rows) {
    this.rows = rows
    this.table = this.render()
  }

  render () {
    this.table = document.createElement('table');
    
    this.table.innerHTML = 
        
  
    this.elem = this.table;

    this.elem.innerHTML =
    `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    ` +
     this.rows.map ((obj) => {
      return `
        <tr>
          <td>${obj.name}</td>
          <td>${obj.age}</td>
          <td>${obj.salary}</td>
          <td>${obj.city}</td>
          <td><button onclick="this.closest('tr').remove()">X</button></td>
        </tr>
      `
    }).join('')

    return this.elem
  }
}
