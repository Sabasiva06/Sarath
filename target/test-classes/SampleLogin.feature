#It must always contain test scenario
Feature: Validating login function of Faccebook application.

  #under feature we can have n number of scenario
  # It describe Test Case Scenario
  @smoke 
  Scenario Outline: Verify Facebook with invalid username and invalid password
    Given User is on facebook
    When user need to enter "<username>" and "<password>"
    And user should click login button
    Then user should validate error message.

    Examples: 
      | username    | password |
      | welcomejava | Hijava   |

  @reg
  Scenario Outline: Verify Facebook with invalid username and invalid password
    Given User is on facebook
    When user need to enter "<username>" and "<password>"
    And user should click login button
    Then user should validate error message.

    Examples: 
      | username    | password |
      | welcomejava | Hijava   |

  Scenario Outline: Verify Facebook with invalid username and invalid password
    Given User is on facebook
    When user need to enter "<username>" and "<password>"
    And user should click login button
    Then user should validate error message.

    Examples: 
      | username    | password |
      | welcomejava | Hijava   |

  @sanity
  Scenario Outline: Verify Facebook with invalid username and invalid password
    Given User is on facebook
    When user need to enter "<username>" and "<password>"
    And user should click login button
    Then user should validate error message.

    Examples: 
      | username    | password |
      | welcomejava | Hijava   |

  @E2E
  Scenario Outline: Verify Facebook with invalid username and invalid password
    Given User is on facebook
    When user need to enter "<username>" and "<password>"
    And user should click login button
    Then user should validate error message.

    Examples: 
      | username    | password |
      | welcomejava | Hijava   |
