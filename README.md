# untappdScraper
I noticed that many people on Twitter publish when they use the Untappd.com application. This app allows a user to "check-in" when they drink beer. They get badges, they dates and times of their drinking is noted, and many times the geographic location of where they drank is also available.....all with no authentication! Woohoo!

So I wondered if I could patch together some Python to scrape the Untappd.com web site for a given user and then do some analytics on their drinking habits. Stuff like:
* What time of day do they drink most often?
* What day of the week do they drink most often?
* What day of the month do they drink most often?
* Who do they drink with?
* Where do they drink?


# Usage
Grab the code for this and you should be good (no 3rd party libraries).

```
$  python untapped.py -h
usage: untapped.py [-h] -u USER

Grab Untappd user activity

optional arguments:
  -h, --help            show this help message and exit
  -u USER, --user USER  Username to research
```

# Example

```
$  python untapped.py -u nvrhapy

[ ] Requesting https://untappd.com/user/nvrhapy/beers
[+]     Response from Untappd received
[*]  Drinking Patterns (Last 25 beers) - Days of Week
         Day (#) : HISTOGRAM
        ---------------------------------
         Mon ( 0) :
         Tue ( 0) :
         Wed ( 0) :
         Thu ( 1) : x
         Fri ( 1) : x
         Sat (14) : xxxxxxxxxxxxxx
         Sun ( 9) : xxxxxxxxx

[*]  Drinking Patterns (Last 25 beers) - Hours of Day
       Hour (#) : HISTOGRAM
      ---------------------------------
         06 ( 0) :
         07 ( 0) :
         08 ( 0) :
         09 ( 0) :
         10 ( 1) : x
         11 ( 1) : x
         12 ( 0) :
         13 ( 2) : xx
         14 ( 0) :
         15 ( 0) :
         16 ( 2) : xx
         17 ( 0) :
         18 ( 0) :
         19 ( 2) : xx
         20 ( 4) : xxxx
         21 ( 6) : xxxxxx
         22 ( 3) : xxx
         23 ( 4) : xxxx
         00 ( 0) :
         01 ( 0) :
         02 ( 0) :
         03 ( 0) :
         04 ( 0) :
         05 ( 0) :

[*]  Drinking Patterns (Last 25 beers) - Day of Month
       Day (#) : HISTOGRAM
      ---------------------------------
         00 ( 0) :
         01 ( 1) : x
         02 ( 0) :
         03 ( 3) : xxx
         04 ( 1) : x
         05 ( 0) :
         06 ( 0) :
         07 ( 0) :
         08 ( 1) : x
         09 ( 3) : xxx
         10 ( 1) : x
         11 ( 0) :
         12 ( 0) :
         13 ( 0) :
         14 ( 1) : x
         15 ( 3) : xxx
         16 ( 2) : xx
         17 ( 1) : x
         18 ( 2) : xx
         19 ( 0) :
         20 ( 0) :
         21 ( 0) :
         22 ( 5) : xxxxx
         23 ( 1) : x
         24 ( 0) :
         25 ( 0) :
         26 ( 0) :
         27 ( 0) :
         28 ( 0) :
         29 ( 0) :
         30 ( 0) :
         31 ( 0) :

[ ] Requesting https://untappd.com/user/nvrhapy/friends
[+]     Response from Untappd received
[ ]     Friends of nvrhapy:
            Acct Name ------ Name
            --------------------
            jv34682 ------ John V.
            tommasocamilleri2 ------ Tommaso C.
            Joeheredia ------ Joe H.
            beerhere89 ------ stephany d.
            Jwilson126 ------ Jason W.
            fernicus ------ Adam F.
            1MattyG ------ Matty G.
            traceyann83 ------ Tracey N.
            Fatabird ------ Fatima F.
            greencape ------ Jay M.
            crispix ------ Christina Z.
            Redpac ------ Dan S.
            pinatax ------ Tall S.
            sprout1880 ------ russell u.
            1rar3br33d ------ Matt

[ ] Requesting https://untappd.com/user/nvrhapy
[+]     Response from Untappd received
[ ]     User info for nvrhapy:
            Total Beers:    2,263
            Total Unique:   1,138
            Total Badges:     396
            Total Friends:     15
```