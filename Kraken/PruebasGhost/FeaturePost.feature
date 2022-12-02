Feature: Crear un post
  @user1 @web 
  Scenario: Crear un post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email
    And I wait for 2 seconds
    And I enter password
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click Posts
    And I wait for 2 seconds
    And I enter new post "Prueba del post"
    And I enter a subtitle "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,...."
    And I wait for 2 seconds
    And I click on preview
    And I wait for 2 seconds
    

    @user2 @web 
  Scenario: Crear un post sin titulo
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email 
    And I wait for 2 seconds
    And I enter password 
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click Posts
    And I wait for 2 seconds
    And I enter a subtitle "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,...."
    And I wait for 2 seconds
    And I click Post back

  @user3 @web 
  Scenario: Crear un post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email
    And I wait for 2 seconds
    And I enter password
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click Posts
    And I wait for 2 seconds
    And I enter new post "Prueba del post"
    And I enter a subtitle "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,...."
    And I wait for 2 seconds
    And I click Post back

  @user4 @web 
  Scenario: Crear un post y editarlo
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email
    And I wait for 2 seconds
    And I enter password
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click Posts
    And I wait for 2 seconds
    And I enter new post "Prueba del post"
    And I enter a subtitle "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,...."
    And I wait for 2 seconds
    And I edit post "Titulo de post editado"


