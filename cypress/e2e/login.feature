Feature: newtours validation

Background:
  Given I logged in on The MovieDB Web

@smoke @sanity
Scenario: Login on The movie DB Web
  When I log in as Following
    |userName| password |
    |Niken_Arra | d0n7STOPmen@w  |
  Then click on submit button
  And verify title should be 'Niken_Arra'

@regression
Scenario: Verifying my Title
  When provide valid 'Niken_Arra' and 'd0n7STOPmen@w'    
  Then click on submit button