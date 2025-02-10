
import { Component } from "react";
import { MAIN_PAGE } from "./consts";
//import { CARD_PAGE, CATALOG, CHAT_PAGE, HELP_PAGE, LESSONS_EDUCATE_PAGE, LESSONS_PAGE, MAIN_PAGE, PERSONAL_PAGE, PERSONAL_PAGE_EDIT, SEARCH_PAGE, SIGN_IN, SIGN_UP, TESTING_EDUCATE_PAGE, TUTOR_PAGE } from "./consts";
 import Homepage from "../pages/Homepage/Homepage";

export const publicRoutes = [
    {
        path: MAIN_PAGE,
        Component: Homepage
    }

 /*  {
    path: MAIN_PAGE,
    Component: Homepage

  },

  {
    path: SIGN_IN,
    Component: SignInPage

  },

  {
    path: SIGN_UP,
    Component: SignUpPage

  },

  {
    path: CATALOG,
    Component: CatalogPage

  },
  {
    path: CARD_PAGE,
    Component: CoursePage
  },
  {
    path: PERSONAL_PAGE,
    Component: PersonalPage

  },


  {
    path: PERSONAL_PAGE_EDIT,
    Component: PersonalEditPage

  },
  {
    path: LESSONS_PAGE,
    Component: CourseLessonsPage

  },

  {
    path: LESSONS_EDUCATE_PAGE,
    Component: LessonPage

  },


  {
    path: TESTING_EDUCATE_PAGE,
    Component: TestingPage

  },

  {
    path: SEARCH_PAGE,
    Component: SearchResultsPage

  },
  {
    path: TUTOR_PAGE,
    Component:  TutorPage

  },
  {
    path: HELP_PAGE,
    Component:  HelpPage

  },

  {
    path: CHAT_PAGE,
    Component:  ChatPage

  },


  {
    path: "*",
    Component: NotFoundPage,
  },
 */
];