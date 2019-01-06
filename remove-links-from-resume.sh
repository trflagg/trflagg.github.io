#!/bin/sh

sed 's/a href=".*"/a/g' ./resume.html > ./resumeNoLinks.html

sed -i '' '/getElementById("emailLink").innerHTML/d' ./resumeNoLinks.html

