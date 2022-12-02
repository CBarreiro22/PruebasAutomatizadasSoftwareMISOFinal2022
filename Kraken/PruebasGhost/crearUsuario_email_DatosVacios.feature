Feature: Crear usuario
@user1 @web
Scenario: Crear usuario campos vacios
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email nuevo " "
  And I wait for 2 seconds
  And I enter password nuevo " "
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
