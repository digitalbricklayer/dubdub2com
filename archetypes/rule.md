---
title: "{{ replace .Name "-" " " | title }}" # Title of the ruleset.
date: {{ .Date }} # Date of ruleset page creation.
description: "Project description." # Description used for search engine.
featureImage: "/images/path/file.jpg" # Sets featured image on blog post.
featureImageAlt: 'Description of image' # Alternative text for featured image.
featureImageCap: 'This is the featured image.' # Caption (optional).
thumbnail: "/images/path/thumbnail.png" # Sets thumbnail image appearing inside card on homepage.
scales:
rulesets:       # List of relesets to be used
  - Ruleset 1
  - Ruleset 2
tags:
  - Tag_name1
  - Tag_name2
draft: true
---
