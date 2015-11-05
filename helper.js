var imgSrc=[];
var images=[];
var imgCount=0;
var count=0;
var caption=[];
var codeVals = {"J":"Jewelry","S":"Specimen", "Th":"Thompsonite", "To":"Tourmaline", "Ga":"Garnet", "Am":"Amethyst", "Aq":"Aquamarine", "Qu":"Quartz", "Sc":"Scepter", "Br":"Bracelet", "Pe":"Pendant", "Ri":"Ring", "Ea":"Earrings", "00":"", "01":"", "02":"", "03":"", "04":"", "05":"", "06":"", "07":"", "08":"", "09":"", "10":"", "11":"", "12":"", "13":"", "14":"", "15":"", "16":"", "17":"", "18":"", "19":"", "20":""};

function fillFotorama()
{
	for (var i=0; i<imgCount; i++)
	{
		tempStr = imgSrc[i] + caption[i] + '">';
		console.log(tempStr);
		$('#Gallery').prepend(tempStr);
	}
}

function getFolderImages()
{
  //get images in the image folder   	
  $.ajax({
  			url: "Gallery",
  			success: function(data){
	     		$(data).find("a:contains(.jpg)").each(function(){
	        	// will loop through 
	        		imgSrc[count]="<img src='Gallery/"+$(this).attr("href")+"' data-caption=";
	        		images[count] = $(this).attr("href");
	        		count++;
	     			});
	     		imgCount=count;
	  			}
			});
}

function decodeCaption(images)
{
	var captionStrVals=[[]];
	var captionStr=[];
	var captionAlt=[];
	for(var i=0;i<count;i++)
	{
	var splitArr;
	splitArr = images[i].substr(0, 1);
	if (!captionStrVals[i]) {
    	captionStrVals[i] = [];
	}
	captionStrVals[i][0] = splitArr;

	for (var j = 1; j < 5; j++) {
    	splitArr = images[i].substring(j + 1 + (j - 1) * 2, j + 3 + (j - 1) * 2);
    	captionStrVals[i][j] = splitArr;
	}
	if (!captionAlt[i]) {
    	captionAlt[i] = [];
	}

		//get each piece and make a new array of the values to the keys
	$.each(captionStrVals[i],function (index,value)
		{
			captionAlt[i][index]=codeVals[captionStrVals[i][index]];
			//clean blank entries from array
			captionAlt[i]=jQuery.grep(captionAlt[i], function(value){
		        return (value !== "" && value != null);
		    });	
		});
	}

		$.each(captionAlt,function (e)  //
		{
			index=e;

			if(captionAlt[e][0]=="Jewelry")
			{
				switch(captionAlt[e].length) {
					case 2:
				        caption[index]="'"+captionAlt[index][1]+"'";
				        break;
					case 3:
				        caption[index]="'"+captionAlt[index][1]+" "+captionAlt[index][2]+"'";
				        break;
				    case 4:
				        caption[index]="'"+captionAlt[index][1]+" and "+captionAlt[index][2]+" "+captionAlt[index][3]+"'";
				        break;
				    case 5:
				        caption[index]="'"+captionAlt[index][1]+", "+captionAlt[index][2]+" and "+captionAlt[index][3]+" "+captionAlt[index][4]+"'";
				        break;
			        case 6:
			        	caption[index]="'"+captionAlt[index][1]+", "+captionAlt[index][2]+", "+captionAlt[index][3]+" and "+captionAlt[index][4]+" "+captionAlt[index][5]+"'";
			        	break;
				    default:
				    	caption[index]="'Awesome Jewelry'";       	
				}
			}
			if(captionAlt[e][0]=="Specimen")
			{
				switch(captionAlt[e].length) {
					case 2:
				        caption[index]="'"+captionAlt[index][1]+"'";
				        break;
					case 3:
				        caption[index]="'"+captionAlt[index][1]+" "+captionAlt[index][2]+"'";
				        break;
				    case 4:
				        caption[index]="'"+captionAlt[index][1]+" with "+captionAlt[index][2]+" "+captionAlt[index][3]+"'";
				        break;
				    case 5:
				        caption[index]="'"+captionAlt[index][1]+", "+captionAlt[index][2]+" with "+captionAlt[index][3]+" "+captionAlt[index][4]+"'";
				        break;
			        case 6:
			        	caption[index]="'"+captionAlt[index][1]+", "+captionAlt[index][2]+", "+captionAlt[index][3]+" with "+captionAlt[index][4]+" "+captionAlt[index][5]+"'";
			        	break;
				    default:
				        caption[index]="'Awesome Jewelry'";
				}
			}

			if(captionAlt[e]==0)
			{
				caption[index]="'Awesome Jewelry'";
			}
		});
}
