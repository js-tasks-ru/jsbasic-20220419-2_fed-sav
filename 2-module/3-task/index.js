let calculator = {
  read (a, b) {
    return this.a = a, this.b = b
  },

  sum () {
    return a + b
  },

  mul (a, b) {
    return a * b
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
