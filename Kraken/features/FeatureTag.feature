Feature: Crear un post
  @user1 @web 
  Scenario: Crear un post
    Given I navigate to page "http://localhost:2370/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email
    And I wait for 2 seconds
    And I enter password
    And I wait for 2 seconds
    And I click next
    And I wait for 3 seconds
    And I click tags
    And I wait for 3 seconds
    And I click new tag
    And I wait for 2 seconds
    And I enter name "un tag desde kraken"