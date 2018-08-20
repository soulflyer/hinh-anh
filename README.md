# Hình Ảnh
![Hình Ảnh](resources/anh-small.png)
Hình Ảnh is a photo management program designed to make sorting and searching as easy as possible. Keywords can be added with the minimum number of keystrokes, or clicks if you still prefer to use a mouse. Writeable IPTC fields can be filled easily and those displayed can be customised to match the fields that you use in your workflow.

## Use

Hinh Anh is designed to be used from the keyboard. By default there is very little on display that isn't necessary for a keyboard driven app. This gives a very clean, non-distracting look. To start with it may be best to turn on the extra displays until the shortcuts all become familiar.

### Projects Screen
This is the project screen. Projects can be selected from the tree on the left. This is for browsing and rating a photo shoot.

![Project Screen](docs/screenshots/projects.png?raw=true) 

### Details Screen
The full details, EXIF and IPTC, for each picture are displayed here. Captions, Titles and keywords can be added here, although the dedicated keywording screen will allow much faster keywording.

![Details Screen](docs/screenshots/details.png?raw=true) 

### Keywording Screen
The top half of the left panel is the keyword set currently in use. Down the left hand edge are the keyword shortcuts. Pressing one of these will add the keyword to all selected photos allowing for fast keywording of multiple shots.

The bottom half of the left panel contains the stored keyword sets. These can be switched in and out with a single keypress.

![Keywording Screen](docs/screenshots/keywording.png?raw=true) 

### Keyword Screen

This is where the keyword heirarchy is created and maintained. Any keywords applied to a photo that don't already appear in the keyword heirarchy will appear in `Orphaned Keywords` where they can be moved into the correct place. Alternatively they can be created here before applying to photos.

![Keyword Screen](docs/screenshots/keywords.png?raw=true) 

### Shortcut keys
At the moment these are hardcoded, although it's fairly easy to change that if you are prepared to edit the source. They are all in `src_front/anh_front/keys/keys.cljs`. Making these configureable is on the to-do list.

### General
key  | action
----:|:-----------
/    | switch between left and right panels
w    | switch left panel between the various screens

### Pictures
key         |  action
---:        |:---
up/down     | basic navigation
left/right  |
return      | Switch to and from single pic display
1,2,3,4,5,0 | Apply rating to focused pic
option *n*  | Only show pics rated *n* or greater

### Projects
key     | action
---:    |:---
up/down | next/previous folder or project
right   | open folder
left    | close folder or go up to enclosing folder

### Keywords
key     | action
---:    |:---
up/down | next/previous keyword
right   | open parent keyword
left    | close parent keyword or go up to parent
a       | show all pics for a keyword
b       | show only best pic for a keyword
\-      | delete keyword
\+      | add keyword
m       | move keyword to a different parent
M       | merge keyword
r       |rename keyword
s       | set focussed pic as best for that keyword
o       | add orphan keywords (keywords found in pics but not in the keyword tree, or keywords in the tree but with no parents)
p       | purge keywords that are not used in any pics (parent keywords excluded)
esc     | cancel any of the keyword edit functions

### Keywording
key         | action
---         |---
asdfg zxcvb | add keyword to focused or selected pics
u           | show buttons for all currently used keywords
hjkl; nmiop | switch to specified key set


## Installation

Hinh Anh requires the backend program [photo-api](https://github.com/soulflyer/photo-api) and a working installation of mongo to provide the database containing all the photo details. [metadata-mongo](https://github.com/soulflyer/metadata-mongo) may be useful too, to help automate loading the database with details from your photos.

## Prerequisites

Hình Ảnh makes some assumptions about the way photos are arranged.

### Filenames and directory names have NO SPACES. 
There is no intention to change this. ever. However detection and warning will hopefully feature soon. Maybe even semi automatic correction. Currently there is no protection, so please check before trying to run Hình Ảnh.

### Photos are stored in a 3 level directory heirarchy
ie year/month/project/photo This arrangement is duplicated for various sizes of photos. The year/month/project/version part being the last part of the path. My arrangement looks like this:

    /photos/masters/yr/mm/pr/
    /photos/fullsize/yr/mm/pr/
    /photos/large/yr/mm/pr/
    /photos/medium/yr/mm/pr/
    /photos/small/yr/mm/pr/
    /photos/thumbs/yr/mm/pr/
    
It isn't necessary to have all these directories, and the first part of the path can be whatever you like, but the last part of each must be yr/mm/pr/pic. Checkout the preferences section for details about setting these. 

The fullsize directory contains my edited photos and the others are all automatically generated (and watermarked) from that using a simple shell script that you can find [here](https://github.com/soulflyer/publish) and the program to specify the watermark size and position is [here](https://github.com/soulflyer/Watermarker) although you are probably better off waiting for this functionality to be incorporated into Hình Ảnh. Currently it is mac only (sorry, I'm a recovering mac fan and I haven't got round to rewriting this bit yet). The readme may still contain mention of Aperture (damn you Apple) although I have removed that dependancy from the code.

### Photos are stored as jpegs
This is temporary, just haven't got round to writing the code to check what kind of pics are actually there. For now they need to have filenames that end in .jpg (lower-case)

### Keywords are unique
Odd things will happen if you have 2 keywords in the keyword tree with the same name. At the moment there are no checks to stop this. If you are navigating through the keyword tree you see strange jumps to different parts of the tree then it's because you have duplicates. It's fairly easy to clean up with keyword merge though. Rename is untested in this situation, its behaviour with duplicte keywords should be considered undefined.

## The Name

Hình Ảnh means image in Vietnamese
 
## License

Copyright ©  FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
