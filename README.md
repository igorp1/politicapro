# PoliticaPro
📊 Data science study on Brazil's 2018 presidential election

![logo](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjH-arch9baAhUCGJAKHbiXAxcQjRx6BAgAEAU&url=http%3A%2F%2Fwww.tse.jus.br%2Feleitor-e-eleicoes%2Feleicoes%2Feleicoes-2018&psig=AOvVaw2pwQCulPdqDm_RnqoM1emU&ust=1524767498524276)


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
| python        | 3.6.3        |
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


