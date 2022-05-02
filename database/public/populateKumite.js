async function postData() {
    
    // Default options are marked with *

    const images = await fetch('/KumiteImgs', {

      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return images.json(); // parses JSON response into native JavaScript objects
  }
  
  postData()
    .then( KumiteImgData => {
      let container = document.getElementById('centered_section');

      const KumiteImgsHtml = KumiteImgData.map((KumiteImage) => {
        return (
            `
            <img src = ${KumiteImage.KumiteImg} alt="Gallery_IMG" class="Gallery_IMG">
            `
        )
    })
  
    if (container) {
        container.innerHTML += KumiteImgsHtml.toString().replaceAll(",", "");
    }

    });