#!/bin/sh

sed 's/a href=".*"/a/g' ./public/resume.html > ./public/resumeNoLinks.html

sed -i '' '/getElementById("emailLink").innerHTML/d' ./public/resumeNoLinks.html

