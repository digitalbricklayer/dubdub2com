---
title: "{{ replace .Name "-" " " | title }}" # Title of the army.
date: {{ .Date }} # Date of army page creation.
description: "Project description." # Description used for search engine.
featureImage: "/images/path/file.jpg" # Sets featured image on blog post.
featureImageAlt: 'Description of image' # Alternative text for featured image.
featureImageCap: 'This is the featured image.' # Caption (optional).
thumbnail: "/images/path/thumbnail.png" # Sets thumbnail image appearing inside card on homepage.
scale:
rulesets:       # List of relesets supported
  - Ruleset 1
  - Ruleset 2
tags:
  - Tag_name1
  - Tag_name2
draft: true
---
