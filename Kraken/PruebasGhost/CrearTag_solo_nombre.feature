Feature: Crear un tag 
  @user1 @web 
  Scenario: Crear tags solo con nombre
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email
    And I wait for 2 seconds
    And I enter password
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click tag
    And I wait for 2 seconds
    And I click new tag
    And I wait for 3 seconds
    And I enter name tag "Se introduce nombre para el tag"
    And I wait for 4 seconds
    And I click save tag
    And I wait for 6 seconds



