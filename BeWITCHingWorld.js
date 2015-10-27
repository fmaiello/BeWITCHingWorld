<script type='text/javascript'>
    var model = {"CurrentFilesLocation":"Current files location:","CurrentFilesLocationDescription":"All the files should be located in the same folder as your html page","MainTitle":"To embed video to your webpage","NeedToShowAdv":true,"Title1":"Upload these files from the output folder to your server","Title2":"Copy this code","Title3":"Paste the code to your webpage between the tags","VideoDatas":[{"__type":"Html5VideoData:#ConverterCommon.Tools.Flash","FolderPath":"C:\\Users\\Owner\\Videos\\My Movie","Height":480,"Href":"http:\/\/www.freemake.com\/free_video_converter\/","HrefText":"video converter","Width":640,"H264FileName":"My Movie.mp4","TheoraFileName":"My Movie.ogv","WebMFileName":"My Movie.webm"}]}
</script>

<script type="text/javascript" src="file:///C:/Program Files (x86)/Freemake/Freemake Video Converter/FreemakeVideoConverter/ForFlash/jquery-1.6.4.min.js"></script>

<script>

var listFiles;
	
function loadDatos() {   
	listFiles = this.model.VideoDatas;
	InsertText(this.model);
	console.log(this.model);
}
function ShowArrow(){
	if ($("video").attr("id")=="0"){
		$(".leftArrow").hide();
	}
	else{
		$(".leftArrow").show();
	}
	var maxIndex = listFiles.length -1;
	var index = parseInt($("video").attr("id"));
	if (index==maxIndex){
		$(".rightArrow").hide();
	}
	else{
		$(".rightArrow").show();
	}
}
function InsertText(respText){
	$("#mainTitle").text(respText.MainTitle);
	$("#title1").text(respText.Title1);
	$("#title2").text(respText.Title2);
	$("#title3").text(respText.Title3);
	
	$("#currentFilesLocation").text(respText.CurrentFilesLocation);
	$("#currentFilesLocationDescription").text(respText.CurrentFilesLocationDescription);
	ShowVideo(0);
}
function ShowVideo(num){
	var video = listFiles[num];
	$("#videoContainer").empty();
	var videoStr = "<div style=\"position: relative; width: "+video.Width+"px;\">\n" + 
	"<video id="+num+" controls width="+video.Width+" height="+video.Height+">\n"+
	"<source src=\"" + video.TheoraFileName + "\" type='video/ogg; codecs=\"theora, vorbis\"'/>\n" +
	"<source src=\"" + video.WebMFileName + "\" type='video/webm' >\n" +
	"<source src=\"" + video.H264FileName + "\" type='video/mp4'>\n" +
	"<p>Video is not visible, most likely your browser does not support HTML5 video</p>\n</video>\n" + 
	(this.model.NeedToShowAdv ? ("<a style=\"font-family: 'Arial'; font-size: 11px; text-decoration: none; position: absolute; color:blue; top: 6px; left: 6px; z-index: 9999;border-style: none; display:block; line-height:8px\" href=\"http://www.freemake.com/\">Freemake</a>\n") : "") + 
	"</div>";
	
	$("#videoContainer").append(videoStr);
	
	$("textarea").val(videoStr);
	$("#folderPath").text(video.FolderPath);
	$("#folderPath").attr("href", video.FolderPath);
	
	$("#listFiles").empty();
	var filesStr = video.TheoraFileName+"<br/>"+video.WebMFileName+"<br/>"+video.H264FileName;

	$("#listFiles").html(filesStr);
	ShowArrow();
}
function NextVideos () {
	var num = $("video").attr("id");
	ShowVideo(parseInt(num)+1);
}
function PrevVideos () {
	var num = $("video").attr("id");
	ShowVideo(parseInt(num)-1);
}

</script>
