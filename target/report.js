$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/SampleLogin.feature");
formatter.feature({
  "name": "Validating login function of Faccebook application.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "User is on facebook",
  "keyword": "Given "
});
formatter.step({
  "name": "user need to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should validate error message.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "welcomejava",
        "Hijava"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to enter \"welcomejava\" and \"Hijava\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_need_to_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should validate error message.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.user_should_validate_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on facebook",
  "keyword": "Given "
});
formatter.step({
  "name": "user need to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should validate error message.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "welcomejava",
        "Hijava"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to enter \"welcomejava\" and \"Hijava\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_need_to_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should validate error message.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.user_should_validate_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User is on facebook",
  "keyword": "Given "
});
formatter.step({
  "name": "user need to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should validate error message.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "welcomejava",
        "Hijava"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to enter \"welcomejava\" and \"Hijava\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_need_to_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should validate error message.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.user_should_validate_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "name": "User is on facebook",
  "keyword": "Given "
});
formatter.step({
  "name": "user need to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should validate error message.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "welcomejava",
        "Hijava"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to enter \"welcomejava\" and \"Hijava\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_need_to_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should validate error message.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.user_should_validate_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});