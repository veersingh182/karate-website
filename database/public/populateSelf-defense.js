async function postData() {
    
    // Default options are marked with *

    const images = await fetch('/selfDefenceImgs', {

      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return images.json(); // parses JSON response into native JavaScript objects
  }
  
  postData()
    .then( selfDefenceImgData => {
      // console.log(ParadeImgData);
      let container = document.getElementById('centered_section');

      const seldDefenceImgsHtml = selfDefenceImgData.map((selfDefenceImage) => {
        return (
            `
            <img src = ${selfDefenceImage.selfDefenceImg} alt="Gallery_IMG" class="Gallery_IMG">
            `
        )
    })
  
    if (container) {
        container.innerHTML += seldDefenceImgsHtml.toString().replaceAll(",", "");
    }

    });