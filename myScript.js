
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
                listItem.classList.add("list-group-item");
                const listItemRow = document.createElement('div');            
                listItemRow.classList.add("row");
                const imgDiv = document.createElement('div');
                imgDiv.classList.add("col-sm-4");
                imgDiv.id="flickrImg";
                const img = document.createElement('img');
                img.id="flickrImg";
                const descriptionDiv = document.createElement('div');
                descriptionDiv.classList.add("col-sm-8");
                const titleRow = document.createElement('div');            
                titleRow.classList.add("row");
                const titleDiv = document.createElement('div');
                titleDiv.classList.add("col-sm-12");
                const title = document.createElement('h3');
                
                const detailsRow = document.createElement('div'); 

                detailsRow.classList.add("row");
                const publishedDiv = document.createElement('div');
                publishedDiv.classList.add("col-12","col-md-6","order-md-2");
                const authorDiv = document.createElement('div');
                authorDiv.classList.add("col-6","col-md-3","order-md-1");
                const authorLink = document.createElement('a');
                const flickrDiv = document.createElement('div');
                flickrDiv.classList.add("col-6","col-md-3","order-md-3");
                const flickrLink = document.createElement('a');
                

                img.src = element.media.m;
                title.textContent =element.title;
                var publishedDate = element.published;
                var publishedDateFormat = dateFormat(publishedDate, "dS mmm yyyy");
                var publishedTimeFormat = dateFormat(publishedDate, "h:MM");
                publishedDiv.textContent = "Published: " + publishedDateFormat + " at " + publishedTimeFormat;
                authorLink.textContent="Post author";
                flickrLink.textContent="View on Flickr";
                var jsonAuthor=element.author;
                var authorSubstr = jsonAuthor.substr(20, jsonAuthor.length);
                var authorReplace = authorSubstr.replace('")','')
                authorLink.href="https://www.flickr.com/photos/"+authorReplace;
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

