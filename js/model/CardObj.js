function CardObj ()
{
	//Attributes declaration
	this.id;
	this.title;
	this.date;
	this.description;
	this.producer;
	this.genre;


	//Methods declaration
	this.construct = function (id,title,date,description,producer,genre)
	{
		this.setId(id);
		this.setTitle(title);
		this.setDate(date);
		this.setDescription(description);
		this.setProducer(producer);
		this.setGenre(genre);
	}

	this.setId = function (id){this.id=id;}
	this.setTitle = function (title){this.title=title;}
	this.setDate = function (date){this.date=date;}
	this.setDescription = function (description){this.description=description;}
	this.setProducer= function (producer){this.producer=producer;}
	this.setGenre = function (genre){this.genre=genre;}

	this.getId = function () {return this.id;}
	this.getTitle = function () {return this.title;}
	this.getDate = function () {return this.date;}
	this.getDescription = function () {return this.description;}
	this.getProducer = function () {return this.producer;}
	this.getGenre = function () {return this.genre;}

	
	this.cookieToObj = function (productObj)
  {
    if(productObj.hasOwnProperty("id"))
      this.setId(productObj.id);

    if(productObj.hasOwnProperty("title"))
      this.setTitle(productObj.title);

		if(productObj.hasOwnProperty("date"))
      this.setDate(productObj.date);

		if(productObj.hasOwnProperty("description"))
			this.setDescription(productObj.description);

		if(productObj.hasOwnProperty("producer"))
			this.setProducer(productObj.producer);

		if(productObj.hasOwnProperty("genre"))
			this.setGenre(productObj.genre);
  }

}
