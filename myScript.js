
    window.addEventListener('load', function() {
        JavaScriptFetch();
    })
    
        function JavaScriptFetch() {
            var script = document.createElement('script');
            script.src = "https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json"
            document.querySelector('head').appendChild(script);
        }
        
        function jsonFlickrFeed(data) {
            data.items.forEach(function (element) {

                const listItem = document.createElement('div');
                const listItemRow = document.createElement('div');            
                const imgDiv = document.createElement('div');
                const img = document.createElement('img');
                const descriptionDiv = document.createElement('div');
                const titleRow = document.createElement('div');            
                const titleDiv = document.createElement('div');
                const title = document.createElement('h3');
                const detailsRow = document.createElement('div'); 
                const publishedDiv = document.createElement('div');
                const authorDiv = document.createElement('div');
                const authorLink = document.createElement('a');
                const flickrDiv = document.createElement('div');
                const flickrLink = document.createElement('a');
                
                listItem.classList.add("list-group-item");
                listItemRow.classList.add("row");
                imgDiv.classList.add("col-sm-4");
                img.id="flickrImg";
                descriptionDiv.classList.add("col-sm-8");
                titleRow.classList.add("row");
                titleDiv.classList.add("col-sm-12");
                detailsRow.classList.add("row");
                publishedDiv.classList.add("col-12","col-md-6","order-md-2");
                authorDiv.classList.add("col-6","col-md-3","order-md-1");
                flickrDiv.classList.add("col-6","col-md-3","order-md-3");
                

                img.src = element.media.m;
                title.textContent =element.title;

                var publishedDate = element.published;
                var publishedDateFormat = dateFormat(publishedDate, "dS mmm yyyy");
                var publishedTimeFormat = dateFormat(publishedDate, "h:MM");
                publishedDiv.textContent = "Published: " + publishedDateFormat + " at " + publishedTimeFormat;
            
                var jsonAuthor=element.author;
                var authorSubstr = jsonAuthor.substr(20, jsonAuthor.length);
                var authorReplace = authorSubstr.replace('")','')
                authorLink.textContent="Post author"; 
                authorLink.href="https://www.flickr.com/photos/"+authorReplace;

                flickrLink.textContent="View on Flickr"; 
                flickrLink.href=element.link;

                imgDiv.appendChild(img);
                listItemRow.appendChild(imgDiv);
                titleDiv.appendChild(title);
                titleRow.appendChild(titleDiv);
                descriptionDiv.appendChild(titleRow);
                detailsRow.appendChild(publishedDiv);
                authorDiv.appendChild(authorLink);
                detailsRow.appendChild(authorDiv);
                flickrDiv.appendChild(flickrLink);
                detailsRow.appendChild(flickrDiv);
                descriptionDiv.appendChild(detailsRow);
                listItemRow.appendChild(descriptionDiv);
                listItem.appendChild(listItemRow);
                document.getElementById("list").appendChild(listItem);
            
             });        
        }

