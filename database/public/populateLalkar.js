async function postData() {
    
    // Default options are marked with *

    const images = await fetch('/LalkarImgs', {

      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return images.json(); // parses JSON response into native JavaScript objects
  }
  
  postData()
    .then( LalkarImgData => {
      // console.log(ParadeImgData);
      let container = document.getElementById('centered_section');

      const LalkarImgsHtml = LalkarImgData.map((LalkarImage) => {
        return (
            `
            <img src = ${LalkarImage.LalkarImg} alt="Gallery_IMG" class="Gallery_IMG">
            `
        )
    })
  
    if (container) {
        container.innerHTML += LalkarImgsHtml.toString().replaceAll(",", "");
    }

    });