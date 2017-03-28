/* @dateToValidate:
* @author:
* @date:
* @description:
* @Attributes:
* 		cookieFiled1: cookieFiled1entification of food in stock
* 		.
* 		.
*		.
* @methods:
* 		construct
* 		set's and get's foor each attribute
*
*
*
*
*/
function productObj ()
{
  //Attributes declaration
  this.cookieFiled1;
  // this.cookieFiled2;
  // this.dateToValidate;
  // this.radioType;
  // this.selectForm;
  // this.checkboxType1;
  // this.checkboxType2;


  //Methods declaration
  this.construct = function (cookieFiled1)//,cookieFiled2,dateToValidate,radioType,selectForm,checkboxType1,checkboxType2
  {
    this.setCookieFiled1(cookieFiled1);
    // this.setCookieFiled2(cookieFiled2);
    // this.setDateToValidate(dateToValidate);
    // this.setRadioType(radioType);
    // this.setSelectForm(selectForm);
    // this.setCheckboxType1(checkboxType1);
    // this.setCheckboxType2(checkboxType2);
  }

  this.setCookieFiled1 = function (cookieFiled1){this.cookieFiled1=cookieFiled1;}
  // this.setCookieFiled2 = function (cookieFiled2){this.cookieFiled2=cookieFiled2;}
  // this.setDateToValidate = function (dateToValidate){this.dateToValidate=dateToValidate;}
  // this.setRadioType = function (radioType){this.radioType=radioType;}
  // this.setSelectForm = function (selectForm){this.selectForm=selectForm;}
  // this.setCheckboxType1 = function (checkboxType1){this.checkboxType1=checkboxType1;}
  // this.setCheckboxType2 = function (checkboxType2){this.checkboxType2=checkboxType2;}

  this.getCookieFiled1 = function () {return this.cookieFiled1;}
  // this.getCookieFiled2 = function (){return this.cookieFiled2;}
  // this.getDateToValidate = function () {return this.dateToValidate;}
  // this.getRadioType = function () {return this.radioType;}
  // this.getSelectForm = function () {return this.selectForm;}
  // this.getCheckboxType1 = function () {return this.checkboxType1;}
  // this.getCheckboxType2 = function () {return this.checkboxType2;}

  // this.arrayToString = function (arrayCookieObj)
  // {
  //   var cookieString ="";
  //   $.each(arrayCookieObj, function (index, film){
  //     cookieString+="film number "+(index+1)+":"+film.toString()+"\n";
  //   });
  //   return cookieString;

  // }

  // this.toCookie = function ()
  // {
  //   var cookieString ="cookieFiled1="+this.getCookieFiled1()+":cookieFiled2="+this.getCookieFiled2()+":dateToValidate="+this.getDateToValidate()+":radioType="+this.getRadioType();
  //   cookieString +=":selectForm="+this.getSelectForm()+":checkboxType1="+this.getCheckboxType1()+":checkboxType2="+this.getCheckboxType2();

  //   return cookieString;
  // }

  // this.toString = function ()
  // {
  //   var cookieString ="cookieFiled1="+this.getCookieFiled1()+" dateToValidate="+this.getDateToValidate()+" cookieFiled2="+this.getCookieFiled2()+" radioType="+this.getRadioType();
  //   cookieString +=" selectForm="+this.getSelectForm()+" checkboxType1="+this.getCheckboxType1()+" checkboxType2="+this.getCheckboxType2();

  //   return cookieString;
  // }
  /*
  this.cookieToObj = function (cookieString)
  {
  var filedsArray = cookieString.split(":");
  this.construct (filedsArray[0].split("=")[1],filedsArray[1].split("=")[1],filedsArray[2].split("=")[1],filedsArray[3].split("=")[1],filedsArray[4].split("=")[1],filedsArray[5].split("=")[1],filedsArray[6].split("=")[1]);
}*/


this.cookieToObj = function (productObj)
{
  try {
    this.setCookieFiled1(productObj.cookieFiled1);
  }
  catch(err) {

  }

  // try {
  //   this.setCookieFiled2(productObj.cookieFiled2);
  // }
  // catch(err) {
  //
  // }
  //
  // try {
  //   this.setDateToValidate(productObj.dateToValidate);
  // }
  // catch(err) {
  //
  // }
  //
  // try {
  //   this.setRadioType(productObj.radioType);
  // }
  // catch(err) {
  //
  // }
  //
  // try {
  //   this.setSelectForm(productObj.selectForm);
  // }
  // catch(err) {
  //
  // }
  //
  // try {
  //   this.setCheckboxType1(productObj.checkboxType1);
  // }
  // catch(err) {
  //
  // }
  //
  // try {
  //   this.setCheckboxType2(productObj.checkboxType2);
  // }
  // catch(err) {
  //   // TODO
  // }
}
}
