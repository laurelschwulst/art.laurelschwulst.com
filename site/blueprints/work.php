<?php if(!defined('KIRBY')) exit ?>

title: Work
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
    width: 3/4
  dormant:
    label: Dormant?
    type: checkbox
    width: 1/4
  year:
    label: Year(s)
    type: text
  description:
    label: Description
    type:  textarea
  theme:
    label: Theme
    type:  radio
    options: query
    help: To add a new theme, create a page for them under the "Themes" page
    query:
      page: themes
      fetch: children