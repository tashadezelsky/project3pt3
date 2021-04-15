console.log("Please work");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: 'keyHlLjNPepQaUXmp'}).base('appaAFtNuU8ZmHaV8');

base('companionship').select({}).eachPage(gotPageOfMermaids, gotAllMermaids);
    // This function (`page`) will get called for each page of records.

const mermaids = [];

function gotPageOfMermaids(records, fetchNextPage) {
    console.log("gotPageOfMermaids()");
    mermaids.push(...records);
    fetchNextPage();
}

function gotAllMermaids(err) {
    console.log("gotAllMermaids()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogMermaids();
showMermaids();
}

function consoleLogMermaids() {
    console.log("consoleLogMermaids()");
    mermaids.forEach((mermaid) => {
    console.log("Mermaid:", mermaid);
});
}

function showMermaids() {
    console.log("showMermaids()");
    mermaids.forEach((mermaid) => {

        //var pictureTitle = document.createElement("h3");
        //pictureTitle.innerText = mermaid.fields.title;
        //document.body.append(pictureTitle);

        //new div where the container for the images will go
        var galleryContainer = document.createElement("div");
        galleryContainer.classList.add("gallerycontainer");
        document.querySelector(".container").append(galleryContainer);

        //window.addEventListener('scroll', function(){
           // if (document.body.scrollTop > 400){
             //   var currScrollPos2 = document.body.scrollTop;
               // document.getElementById('container').style.opacity = -currScrollPos2 / 400 + 2;
            //}
        //});

        var imageDesc = document.createElement("h4");
        imageDesc.classList.add("desc");
        imageDesc.innerText = mermaid.fields.description;
        galleryContainer.append(imageDesc);

        var imageTitle = document.createElement("h1");
        imageTitle.classList.add("image-title");
        imageTitle.innerText = mermaid.fields.title;
        galleryContainer.append(imageTitle);


        var imageCircle = document.createElement("div");
        imageCircle.classList.add("image-circle");
        document.querySelector(".image-container").append(imageCircle);

        //add the picture 
        var galleryImage = document.createElement("img");
        galleryImage.classList.add("image-view");
        galleryImage.src = mermaid.fields.cursor[0].url;
        imageCircle.append(galleryImage); 

         //opacity scrolling for text
         var box = document.querySelectorAll('.gallerycontainer');
         function scrollTrigger() {
 
             box.forEach(function(item){
               var boxPosition = item.getBoundingClientRect().top;
                 var boxPercent = (boxPosition / window.innerHeight) * 100;
                 if (boxPercent <= 40) {
                       item.classList.add('gallerycontainer-active')
                     } else {
                       item.classList.remove('gallerycontainer-active')
                     }
                });
       
            }
 
         window.addEventListener("scroll", scrollTrigger);
 
         window.addEventListener("scroll", scrollTrigger);
 
         var box = document.querySelectorAll('.gallerycontainer');
         function scrollTrigger3() {
 
             box.forEach(function(item){
               var boxPosition = item.getBoundingClientRect().top;
                 var boxPercent = (boxPosition / window.innerHeight) * 100;
                 if (boxPercent <= 10) {
                       item.classList.add('gallerycontainer-active2')
                     } else {
                       item.classList.remove('gallerycontainer-active2')
                     }
                });
       
            }
 
         window.addEventListener("scroll", scrollTrigger3);
 
         
         //opacity scrolling for image pt1
         var imagebox = document.querySelectorAll('.image-circle');
         function scrollTrigger1(){
 
             imagebox.forEach(function(item){
              var imageboxPosition = item.getBoundingClientRect().top;
                 var imageboxPercent = (imageboxPosition / window.innerHeight) * 100;
                 if (imageboxPercent <= 40) {
                 item.classList.add('image-circle-active')
                 } else {
                     item.classList.remove('image-circle-active')
                 }
             });
         }
 
         window.addEventListener("scroll", scrollTrigger1);
 
         
        var imagebox1 = document.querySelectorAll('.image-circle');
         function scrollTrigger2(){
 
            imagebox1.forEach(function(item){
            var imagebox1Position = item.getBoundingClientRect().top;
               var imagebox1Percent = (imagebox1Position / window.innerHeight) * 100;
                 if (imagebox1Percent <= 5) {
                 item.classList.add('image-circle-active2')
                 } else {
                     item.classList.remove('image-circle-active2')
                 }
             });
         }
 
         window.addEventListener("scroll", scrollTrigger2);

        //add event listener for scroll?
        //imageCircle.addEventListener('scroll', (event) => {
            //const { top } = imageCircle.getBoundingClientRect();
            //if (top - window.innerHeight < scrollAmount) {
                //imageCircle.style.backgroundImage = mermaid.fields.cursor[0].url;
            //}

        //}

    })
};
