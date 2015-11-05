# FotoRamaAutoCaption
A template website that offers a way to generate automatic captions for a the FotoRama photo gallery

This was initially written to help a jewelry designer with little web experience to upload new images to a photo gallery.
The idea was to preload a list of materials into an array and reference them using 2 character codes in the filename.
The code reads the entire contents of the directory for jpg images and loads and generates captions for the photos
based on the filenames. Since the designer uses a set number of materials in the designs, it was set up for a finite number of 
codes, but is easily expanded. 

Features of the code:
	1. Entire contents of directory loaded into gallery with the .jpg extension (ignores other extensions)
	2. Default caption for photos not properly formatted fith codenames
	3. Expandable codebase up to 20 codes hardwired
	4. uses Fotorama gallery which is customizable and pretty sweet http://fotorama.io/
	5. Possibility of useing external text file for codenames (to help ease stress of updating)
	6. Simple code only needs one small javascript file.
	7. Website template complete with fancy auto-sizing text and menus making it well suitable for various devices. 

How to make it work:
Add all files to a folder with the optional files for the menues (highly recommended). Create a subfolder called "Gallery" and put your (.jpg) images in it.  Give them names that correspond to the codes (Found in the ImageCodes.txt file).  You can add/change them in the helper.js file in the codeVals array. There are an additional 20 in the array waiting to be assigned values. 

The css menus used to create this template site I got from here:  https://code.google.com/p/free-css-drop-down-menu-framework/downloads/detail?name=free-css-drop-down-menu_v1.3.zip&can=2&q=
You can add the css folder to this to make it look pretty. All thelinks are built in to the code so you just need to place the folder in the root directory to make it work.
