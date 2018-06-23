# Hình Ảnh
![Hình Ảnh](resources/anh.png)
Hình Ảnh is a photo management program designed to make sorting and searching as easy as possible. Keywords can be added with the minimum number of keystrokes, or clicks if you still prefer to use a mouse. Writeable IPTC fields can be filled easily and those displayed can be customised to match the fields that you use in your workflow.

## Installation

Hinh Anh requires the backend program [photo-api](https://github.com/soulflyer/photo-api) and a working installation of mongo to provide the database containing all the photo details.[metadata-mongo](https://github.com/soulflyer/metadata-mongo) may be useful too, to help automate loading the database with details from your photos.

## Prerequisites

Hình Ảnh makes some assumptions about the way photos are arranged.

Firstly, filenames and directory names have NO SPACES. There is no intention to change this. ever. However detection and warning will hopefully feature soon. Maybe even semi automatic correction. Currently there is no protection, so please check before trying to run Hình Ảnh.

Secondly, photos are stored in a 3 level directory heirarchy, ie <year>/<month>/<project>/<photo> This arrangement is duplicated for various sizes of photos. The year/month/project/version part being the last part of the path. My arrangement looks like this:

    /photos/masters/yr/mm/pr/
    /photos/fullsize/yr/mm/pr/
    /photos/large/yr/mm/pr/
    /photos/medium/yr/mm/pr/
    /photos/small/yr/mm/pr/
    /photos/thumbs/yr/mm/pr/
    
It isn't necessary to have all these directories, and the first part of the path can be whatever you like, but the last part of each must be yr/mm/pr/pic. Checkout the preferences section for details about setting these. 

The fullsize directory contains my edited photos and the others are all automatically generated (and watermarked) from that using a simple shell script that you can find [here](https://github.com/soulflyer/publish) and the program to specify the watermark size and position is [here](https://github.com/soulflyer/Watermarker) although you are probably better off waiting for this functionality to be incorporated into Hình Ảnh. Currently it is mac only (sorry, I'm a recovering mac fan and I haven't got round to rewriting this bit yet). The readme may still contain mention of Aperture (damn you Apple) although I have removed that dependancy from the code.

## The Name

Hình Ảnh means image in Vietnamese
 
## License

Copyright ©  FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
