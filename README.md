# PoliticaPro
📊 Data science study on Brazil's 2018 presidential election

![logo](https://www.cheapcpapsupplies.com/blog/wp-content/uploads/2018/02/stats-gif.gif)

## Dev system requirements:
You must have the following intalled in your machine:

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [python](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installing/)
- [virtualenv](https://virtualenv.pypa.io/en/stable/installation/)

This project was built using:

| Program       | Version       |
| ------------- |:-------------:|
| node          | 10.0.0        |
| npm           | 6.0.0         |
| python        | 3.6.3         |
| pip           | 9.0.3         |
| virtualenv    | 15.2.0        |


## Get started

### /politicapro-backend

To setup the virtual env:
```
virtualenv _env
source _env/bin/activate 
pip install -r requirements.txt
```
To activate the virtualenv:
```
source _env/bin/activate 
```
To run the aplication:
```
APP_ENV=dev
python manage.py runserver
```
To run unit tests:
```
nosetests
```
If you add new python packages make sure to:
```
pip freeze > requirements.txt
```
To implement model changes to the DB:
```
python manage.py db migrate
python manage.py db upgrade
``` 


### /politicapro-webapp
To install dependencies:
```
npm i
```

To start the aplication on your local run:
```
npm start
```
