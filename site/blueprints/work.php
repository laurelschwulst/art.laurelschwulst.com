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