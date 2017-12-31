# react_native_nav_manager
it's a small app that uses the following modules:

  react-native-router-flux

  redux

  react-redux

  redux-thunk

  firebase
  ...

## todos
# the logout implementation 
  use the spinner each time we perform an asynchronus action 
  deploy on real devise.

## added
# model implementation 
  I have added a new common component - confirmModal for this purpose 
# using different params per env. test, dev and production
  I have used dotenv npm package, to externalize the real enviroment variables
  please have a look on the .env file and the .babelrc mainly the plugin react-native-dotenv
# using babel plugins 
  By  using transform-class-properties and transform-object-rest-spread
  you can write arrow functions instead the es6 method , myself i found this more natural, in the same context the rest-spread allows us to spread the properties of an object e.g {...obj}.
# navigation implementation 
the version of react-native-router-flux used in this sample is : "4.0.0-beta.24".