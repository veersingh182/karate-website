async function postData() {
    
    // Default options are marked with *

    const images = await fetch('/ParadeImgs', {

      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return images.json(); // parses JSON response into native JavaScript objects
  }
  
  postData()
    .then( ParadeImgData => {
      // console.log(ParadeImgData);
      let container = document.getElementById('centered_section');

      const ParadeImgsHtml = ParadeImgData.map((ParadeImage) => {
        return (
            `
            <img src = ${ParadeImage.ParadeImg} alt="Gallery_IMG" class="Gallery_IMG">
            `
        )
    })
  
    if (container) {
        container.innerHTML += ParadeImgsHtml.toString().replaceAll(",", "");
    }

    });