/**
 * @name userObj.js
 * @author Jean David Andrade Pazmiño / Aleix Velasco Calvo
 * @description Document to define the user object.
 * @params none
 * @return none
 * @date //2017
 * @version v 1.0
 */
function userObj ()
{
  // Attributes declaration
  this.nick;
  this.name;
  this.surname;
  this.mail;
  this.password;
  this.rol;

  // Methods declaration
  this.construct = function (nick, name, surname, mail, password, rol)
  {
    this.setNick(nick);
    this.setName(name);
    this.setSurname(surname);
    this.setMail(mail);
    this.setPassword(password);
    this.setRol(rol);
  }

  // Setters
  this.setNick = function (nick){this.nick=nick;}
  this.setName = function (name){this.name=name;}
  this.setSurname = function (surname){this.surname=surname;}
  this.setMail = function (mail){this.mail=mail;}
  this.setPassword = function (password){this.password=password;}
  this.setRol = function (rol){this.rol=rol;}

  // Getters
  this.getNick = function () {return this.nick;}
  this.getName = function () {return this.name;}
  this.getSurname = function () {return this.surname;}
  this.getMail = function () {return this.mail;}
  this.getPassword = function () {return this.password;}
  this.getRol = function () {return this.rol;}

  // Other Methods
  this.cookieToObj = function (userObj) {
    if(userObj.hasOwnProperty("nick"))
      this.setNick(userObj.nick);

    if(userObj.hasOwnProperty("name"))
      this.setName(userObj.name);

    if(userObj.hasOwnProperty("surname"))
      this.setSurname(userObj.surname);

    if(userObj.hasOwnProperty("mail"))
      this.setMail(userObj.mail);

    if(userObj.hasOwnProperty("password"))
      this.setPassword(userObj.password);

    if(userObj.hasOwnProperty("rol"))
      this.setRol(userObj.rol);
  }
}