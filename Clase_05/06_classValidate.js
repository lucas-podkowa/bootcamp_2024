class Validate {
  //----------------------------------------------------------------
  //--------------------Metodos para fechas ------------------------
  //----------------------------------------------------------------

  
  // Valida si una persona no tiene más de 100 años
  static isAgeValid(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesDeDiferencia = hoy.getMonth() - nacimiento.getMonth();
    if (
      mesDeDiferencia < 0 ||
      (monthDifference === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }
    return edad <= 100;
  }

  // Valida que una fecha sea posterior a otra
  static isAfterDate(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return end > start;
  }

  //----------------------------------------------------------------
  //--------------------Metodos para login -------------------------
  //----------------------------------------------------------------

  // Valida si una contraseña tiene al menos un número y una letra
  static isPasswordSecure(password) {
    const securePasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return securePasswordRegex.test(password);
  }

  // Valida el formato de un correo electrónico
  static isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Valida que una fecha esté en el formato correcto (YYYY-MM-DD)
  static isDateValid(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }

  // Valida que la extensión de un correo electrónico sea .com
  static isEmailComDomain(email) {
    return email.endsWith(".com");
  }

  //----------------------------------------------------------------
  //--------------------Metodos de cadena --------------------------
  //----------------------------------------------------------------

  // Valida la longitud de una cadena
  static isLengthValid(value, minLength, maxLength) {
    return value.length >= minLength && value.length <= maxLength;
  }

  // Valida si un campo está vacío
  static isEmpty(value) {
    return !value || value.trim().length === 0;
  }
}

module.exports = Validate;
