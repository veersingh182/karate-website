async function postData() {
    
    // Default options are marked with *

    const images = await fetch('/BeltGradingImgs', {

      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return images.json(); // parses JSON response into native JavaScript objects
  }
  
  postData()
    .then( BeltGradingImgData => {
      // console.log(ParadeImgData);
      let container = document.getElementById('centered_section');

      const BeltGradingImgsHtml = BeltGradingImgData.map((BeltGradingImage) => {
        return (
            `
            <img src = ${BeltGradingImage.BeltGradingImg} alt="Gallery_IMG" class="Gallery_IMG">
            `
        )
    })
  
    if (container) {
        container.innerHTML += BeltGradingImgsHtml.toString().replaceAll(",", "");
    }

    });