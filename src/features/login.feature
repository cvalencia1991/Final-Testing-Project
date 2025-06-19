Feature: Sauce demo login webpage 

  Scenario: A user should not be able to log in without credentials

    Given I am on the login page
    When I login with <username> and <password>
    And I clear <username> and <password>
    And I click the "Login" button
    Then should see the error message "Username is required"

  Scenario: A user should not be able to log in without a password

    Given I am on the login page
    When I login with <username> and <password>
    And I clear <password>
    And I click the "Login" button
    Then should see the error message "Password is required"

  Scenario: A user should be able to log in with username and password

    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    And I click the "Login" button
    Then  I should see "Swag Labs" on the header of dashboard page
