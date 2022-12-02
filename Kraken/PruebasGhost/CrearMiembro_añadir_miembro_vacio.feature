Feature: Crear miembro
@user1 @web
Scenario: Añadirse a miembro vacio
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email
  And I wait for 2 seconds
  And I enter password
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click miembro
  And I wait for 5 seconds
  And I click miembro nuevo
  And I wait for 5 seconds
  And I click guardar miembro
  And I wait for 5 seconds

