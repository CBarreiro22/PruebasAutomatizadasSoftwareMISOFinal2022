Feature: Crear un tag 
  @user1 @web 
  Scenario: Crear un tag sin nombre
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
    And I enter slug "ghost"
    And I wait for 3 seconds
    And I enter description tag "Se crea tag para la pagina de ghost"
    And I wait for 3 seconds
    And I click save tag
    And I wait for 7 seconds

