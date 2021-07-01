# tuto-sequelize
tuto Node Mysql with Sequelize

# Pré-requis
  - NodeJS
  - MySQL

Créé un user 'tuto' avec le mot de pass 'tuto$' avec mysql
```
mysql -u root -p
<votre mot de pass root>
```
Dans MySQL:
```
create user 'tuto'@'localhost' identified by 'tuto$';
grant all privileges on *.* to 'tuto'@'localhost';
flush privileges;
```

# Installation

MySQL:
```
mysql -u tuto -p
create database tutosequelize;
exit;
```

le tuto:
```
git clone <le lien en https>
npm i
npm run test
```

'npm run test' vous permettra de creer toutes les tables !

Ensuite vous pouvez arreter le processus !
et faire:
```
npm run dev
```

Ensuite depuis postman vous pouvez interroger votre api

par exemple:
http://localhost:4000/user

En espérant que cela vous aidera !

Peace'