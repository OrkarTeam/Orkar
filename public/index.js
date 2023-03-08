function getSite() {
    const url = `https://ordinals.com/feed.xml`;
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
  
        const link0 = items[0].getElementsByTagName("link")[0].textContent;
        const link1 = items[1].getElementsByTagName("link")[0].textContent;
        const link2 = items[2].getElementsByTagName("link")[0].textContent;
        const link3 = items[3].getElementsByTagName("link")[0].textContent;
  
        const id0 = guid0.substring(13);
        const id1 = guid1.substring(13);
        const id2 = guid2.substring(13);
        const id3 = guid3.substring(13);
  
        document.getElementById("title0").innerHTML = `${title0}`;
        document.getElementById("title1").innerHTML = `${title1}`;
        document.getElementById("title2").innerHTML = `${title2}`;
        document.getElementById("title3").innerHTML = `${title3}`;
  
        document.getElementById(`title0`).href = `/inscription?inscriptionid=${id0}`;
        document.getElementById(`title1`).href = `/inscription?inscriptionid=${id1}`;
        document.getElementById(`title2`).href = `/inscription?inscriptionid=${id2}`;
        document.getElementById(`title3`).href = `/inscription?inscriptionid=${id3}`;
  
        document.getElementById("guid0").innerHTML = `${guid0}`;
        document.getElementById("guid1").innerHTML = `${guid1}`;
        document.getElementById("guid2").innerHTML = `${guid2}`;
        document.getElementById("guid3").innerHTML = `${guid3}`;
  
        document.getElementById("link0").innerHTML = `${link0}`;
        document.getElementById("link1").innerHTML = `${link1}`;
        document.getElementById("link2").innerHTML = `${link2}`;
        document.getElementById("link3").innerHTML = `${link3}`;
  
        document.getElementById("img0").src=`https://ordinals.com/content/${id0}`;
        document.getElementById("img1").src=`https://ordinals.com/content/${id1}`;
        document.getElementById("img2").src=`https://ordinals.com/content/${id2}`;
        document.getElementById("img3").src=`https://ordinals.com/content/${id3}`;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
