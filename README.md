# Meteor 1.7  multitenant + Bootstrap 3 + a lot of useful modules

## Available components

## Default users and roles creation

The file `imports/startup/server/fixtures.js` initialises the defaut users `admin@orange.com` (password : `adminadmin`) and `dev@orange.com` (password : `devdev`).

### navBar

### languageSelect

### autoDoc


## Installation
- `meteor create  --release 1.7 meteor-template-1.7 --full`

- [bootstrap 3.3.6](https://getbootstrap.com/docs/3.3/) : `meteor add twbs:bootstrap`

- [fontawesome-free 5.12.1](https://fontawesome.com/icons?d=gallery&m=free) : `meteor npm install --save @fortawesome/fontawesome-free`

- `meteor add stylus`

- accounts-password : `meteor add accounts-password` `meteor add ian:accounts-ui-bootstrap-3`

- [mizzao:user status](https://github.com/Meteor-Community-Packages/meteor-user-status) : `meteor add mizzao:user-status`

- [peppelg:bootstrap-3-modal](https://github.com/PeppeL-G/bootstrap-3-modal) : `meteor add peppelg:bootstrap-3-modal`

- [alanning:roles@1.2.16](https://github.com/Meteor-Community-Packages/meteor-roles/tree/v1) : `meteor add alanning:roles`

- [aldeed NPM simpl-schema](https://github.com/aldeed/simple-schema-js) `meteor npm install --save simpl-schema`

- [aldeed:autoform@6.0.0](https://github.com/aldeed/meteor-autoform) : `meteor add aldeed:autoform@6.0.0`

- [tap:i18n](https://github.com/TAPevents/tap-i18n) : `meteor add tap:i18n`

- [zimme:active-route](https://github.com/meteor-activeroute/legacy) : `meteor add zimme:active-route`

- for starting problems : `meteor npm install --save-exact @babel/runtime@7.0.0-beta.55`

- and `meteor add stylus@=2.513.14`

- [chrismbeckett:toastr](https://atmospherejs.com/chrismbeckett/toastr) : `meteor add chrismbeckett:toastr`

- [aldeed:collection2](https://github.com/Meteor-Community-Packages/meteor-collection2) : `meteor add aldeed:collection2@3.0.0`


## Bugs

- Bug (very low impact) in TAP:i18n : if translation files are located in sub directories, only the english translation is available. File organisation impact only.


## Improvement

- Add Github version management

- User management to be added

- fork `tap:i18n` to make use of NPM simpl-schema

- add `bcrypt`

- `stylus` deprecated

- translate date in user management with moment in the right languageSelect

- Language support I18n files : where to put client.dataLoadingMsg in client.main.dataLoadingMsg ?

- pointing object detection to be implemented, user mgmt to be then modified

- replace bootstrap icons delete and modify with fontawesome one

- Ajouter un usefull helpers mis à jour !

- Add a linter

- Modify waiting template to be able to wait for multiple reasons, with multiple waiting messages (server ofline, data loading..)

- Shall we route to an "non allowed access" page if access is non allowed ?

- Add waiting popup option when offline

- create user and send e-mail to him instead of setting the password

- !!! users management : make impossible to change mail, role or alias of main admin. A user cannot change its own roles

- !!! When add route in routes_PARMS we need to import the component in route.js !!

- !!! Should we pt a "S" to schemas variable ?

- !!! Bug autovalue on schemasDoc

- Add a schema on the user collection (see example in collection2) ?

- users management : use localized moment

- users management : make automatic tests

- user management : put ADMIN creation independantly in order not to have any modification !

- user management : if form is not correct, the form is sent to the server (it should not be), and we get a form errors messages o

- user management : add "check" in server's method

- user management : insertUserForm autohook form : better management of other error without reasons or non translated codes. Use error.code instead of error.reason ?


## Upgrades : to do

- Allaning role 3 : change the default users and default roles creation code (depending on mongo version and meteor version).