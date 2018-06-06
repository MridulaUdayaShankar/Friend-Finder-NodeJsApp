# Friend-Finder-NodeJsApp

## Getting started
This is a compatibility-based "FriendFinder" application to find the most compatible F.R.I.E.N.D.S character! This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

### Pre-requisites
* The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
* The user's most compatible friend is determined using this logic as a guide:

* Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


* Example: 
1. User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

2. User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

* Once the current user's most compatible F.R.I.E.N.D.S character is found,the result is displayed as a modal pop-up with both the name and picture of the F.R.I.E.N.D.S character.

#### Installation

* Node package modules for express, body-parser.
* NodeJs


