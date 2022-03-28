
Feature: Student Registration Form

    Scenario Outline: Launch Browser Student Registration Form
        Given Open Student Registration URL
        When Input Student First Name "<firstname>"
        And Input Student Last Name "<lastname>"
        And Select Gender "<gender>"
        And Input Student ID "<studentID>"
        And Input Mobile Number "<mobile>"
        And Input Student Email "<email>"
        And Click Study Time 8-10 AM
        And Click Submit Student Registration Form
        Then Verify Student Registration Submit Successfully
        Examples: 
            | firstname | lastname | gender | studentID | mobile | email |
            | My First Name | My Last Name | Male | 6179999999 | 0829999999 | test@test.com |