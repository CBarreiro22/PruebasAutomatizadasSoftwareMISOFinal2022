Feature: Crear pagina sin titulo con contenido
@user1 @web
Scenario: Crear pagina nueva
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email
  And I wait for 2 seconds
  And I enter password
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click pages
  And I wait for 2 seconds
  And I click New page
  And I wait for 3 seconds
  And I enter page " "
  And I wait for 2 seconds
  And I enter contenido pagina "Se crea el contenido de una pagina "
  And I wait for 2 seconds
  And I click Salir page
  And I wait for 7 seconds
