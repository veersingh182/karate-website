async function postData() {
    
    // Default options are marked with *

    const images = await fetch('/TripImgs', {

      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return images.json(); // parses JSON response into native JavaScript objects
  }
  
  postData()
    .then( TripImgData => {
      // console.log(ParadeImgData);
      let container = document.getElementById('centered_section');

      const TripImgsHtml = TripImgData.map((TripImage) => {
        return (
            `
            <img src = ${TripImage.TripImg} alt="Gallery_IMG" class="Gallery_IMG">
            `
        )
    })
  
    if (container) {
        container.innerHTML += TripImgsHtml.toString().replaceAll(",", "");
    }

    });