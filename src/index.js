function getSite() {
    const url = `https://ord.ordscan.xyz/feed.xml`;
    getData(url);
  }
  
  window.addEventListener("load", getSite);
  
  function getData(url) {
    const parser = new DOMParser();
    return fetch(url)
      .then(response => response.text())
      .then(data => parser.parseFromString(data, "application/xml"))
      .then(parsedData => {
        const items = parsedData.getElementsByTagName("item");
        const title0 = items[0].getElementsByTagName("title")[0].textContent;
        const title1 = items[1].getElementsByTagName("title")[0].textContent;
        const title2 = items[2].getElementsByTagName("title")[0].textContent;
        const title3 = items[3].getElementsByTagName("title")[0].textContent;
  
        const guid0 = items[0].getElementsByTagName("guid")[0].textContent;
        const guid1 = items[1].getElementsByTagName("guid")[0].textContent;
        const guid2 = items[2].getElementsByTagName("guid")[0].textContent;
        const guid3 = items[3].getElementsByTagName("guid")[0].textContent;
  

        const id0 = guid0.substring(13);
        const id1 = guid1.substring(13);
        const id2 = guid2.substring(13);
        const id3 = guid3.substring(13);
  
        document.getElementById("title0").innerHTML = `${title0}`;
        document.getElementById("title1").innerHTML = `${title1}`;
        document.getElementById("title2").innerHTML = `${title2}`;
        document.getElementById("title3").innerHTML = `${title3}`;
  
        document.getElementById(`title0`).href = `/inscription?number=${id0}`;
        document.getElementById(`title1`).href = `/inscription?number=${id1}`;
        document.getElementById(`title2`).href = `/inscription?number=${id2}`;
        document.getElementById(`title3`).href = `/inscription?number=${id3}`;
  
        document.getElementById("img0").src=`https://ord.ordscan.xyz/preview/${id0}`;
        document.getElementById("img1").src=`https://ord.ordscan.xyz/preview/${id1}`;
        document.getElementById("img2").src=`https://ord.ordscan.xyz/preview/${id2}`;
        document.getElementById("img3").src=`https://ord.ordscan.xyz/preview/${id3}`;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
  }
  window.addEventListener('DOMContentLoaded', () => {
    const iframeElements = document.querySelectorAll('.inscription-item iframe');
    iframeElements.forEach(iframe => {
      iframe.setAttribute('scrolling', 'no');
    });
  });

  const collectionsButton = document.getElementById('collectionsButton');
  collectionsButton.addEventListener('click', () => {
    window.location.href = '/collection';
  });
  