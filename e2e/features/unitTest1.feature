Feature: Bing Search
This is a sample feature to test search engine

  Scenario: Search something from bing
    Given browse to web site "https://www.bing.com"
    When input keyword "Mars"
    Then click Search button
    And search result should contain "NASA"