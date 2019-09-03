// Display gifs of a cute/funny topic using: https://developers.giphy.com/docs/
// Obtain an API key
// Search/Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if(xhr.status === 200) {
      let result = xhr.responseText;
      let parsedResult = JSON.parse(result);
      console.log(parsedResult.data);

      for (let i = 0; i < parsedResult.data.length; i++) {
          let div = document.createElement('div');
          div.style.backgroundImage = `url(${parsedResult.data[i].images.downsized_still.url})`;
          div.style.width = '100px';
          div.style.height = '100px';
          document.getElementsByTagName('body')[0].appendChild(div);
      };
      let divs = document.querySelectorAll('div');
      for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function() {
            divs[i].style.backgroundImage = `url(${parsedResult.data[i].images.downsized.url})`;
        });
      }

    }
    else {
      console.log('Something went wrong');
    }
  }
};
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=hHDvkAiwNdvr6PbXtUTo1DbCJTiGcbAd&q=dog&limit=25&offset=0&rating=G&lang=en');
xhr.send();